> **문서 수정일: 2026.02.05**

### [DB SCHEMA]

**[TABLE] Category**
├── id [PK]
├── uuid
├── is_Active
├── slug
├── parant_id
├── category_range
├── category_name
├── included articles [ARRAY]
├── created_At
└── updated_At

**[TABLE] Posts**
├── id [PK]
├── uuid
├── is_Active
├── slug
├── category_id [FK]
├── sub_category_id
├── title
├── description
├── content [JSONB]
├── thumbnail_url [text]
├── status [ENUM: Public | Private | Temporary ]
├── created_At
└── updated_At

**[TABLE] Tags**
├── id [PK]
├── uuid
├── is_Active
├── tag_name
├── created_At
└── updated_At

**[TABLE] Post_Tag_Mapping**
├── post_id [FK]
└── tag_id [FK]
