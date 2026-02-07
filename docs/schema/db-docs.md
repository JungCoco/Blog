> **문서 수정일: 2026.02.05**

### [DB SCHEMA]

**[TABLE] Category**  
├── id [PK]  
├── uuid  
├── is_Active  
├── slug  
├── parent_id  
├── category_name  
├── created_At  
└── updated_At

**[TABLE] Posts**  
├── id [PK]  
├── uuid  
├── is_Active  
├── slug [unique]  
├── category_id [FK]  
├── title  
├── description  
├── content [JSONB]  
├── thumbnail_url [text]  
├── status [ENUM: Public | Private | Temporary ]  
├── published_At [timestamp]  
├── created_At  
└── updated_At  

**[TABLE] Post_Stats**  
├── id [PK]  
├── uuid  
├── is_Active  
├── post_id [FK]  
├── view_count  
├── like_count  
├── share_count  
├── comment_count  
├── last_viewed_at [timestamp]  // 분석할 때, '오늘 조회수 분석'이나 '이번 주 조회수 분석' 등 다방면으로 활용 가능한 컬럼  
├── created_At  
└── updated_At  

**[TABLE] Tags**
├── id [PK]
├── uuid
├── is_Active  
├── slug [varchar, unique]  
├── tag_name  
├── created_At  
└── updated_At

**[TABLE] Post_Tag_Mapping**  
├── id [PK]  
├── post_id [FK]  
└── tag_id [FK]