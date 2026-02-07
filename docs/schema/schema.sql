-- UUID 확장 활성화 (PostgreSQL 13+ 에서는 불필요하지만 호환성을 위해 추가)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ENUM 타입 생성
CREATE TYPE post_status AS ENUM ('public', 'private', 'temporary');

-- 1. Categories 테이블
CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    uuid UUID DEFAULT gen_random_uuid() UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    parent_id BIGINT,
    category_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    CONSTRAINT fk_category_parent 
        FOREIGN KEY (parent_id) 
        REFERENCES categories(id) 
        ON DELETE CASCADE
);

-- 2. Posts 테이블
CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY,
    uuid UUID DEFAULT gen_random_uuid() UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category_id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content JSONB NOT NULL,
    thumbnail_url TEXT,
    status post_status DEFAULT 'temporary' NOT NULL,
    published_at TIMESTAMP,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    CONSTRAINT fk_posts_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE RESTRICT
);

-- 3. Post_Stats 테이블
CREATE TABLE post_stats (
    post_id BIGINT PRIMARY KEY,
    view_count INTEGER DEFAULT 0 NOT NULL,
    like_count INTEGER DEFAULT 0 NOT NULL,
    share_count INTEGER DEFAULT 0 NOT NULL,
    comment_count INTEGER DEFAULT 0 NOT NULL,
    last_viewed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    CONSTRAINT fk_post_stats_post
        FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE
);

-- 4. Tags 테이블
CREATE TABLE tags (
    id BIGSERIAL PRIMARY KEY,
    uuid UUID DEFAULT gen_random_uuid() UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    tag_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);


-- 5. Post_Tag_Mapping 테이블
CREATE TABLE post_tag_mapping (
    post_id BIGINT NOT NULL,
    tag_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    PRIMARY KEY (post_id, tag_id),
    
    CONSTRAINT fk_post_tag_post
        FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_post_tag_tag
        FOREIGN KEY (tag_id)
        REFERENCES tags(id)
        ON DELETE CASCADE
);