# Data Model: AI/Spec-Driven Book on Physical AI & Humanoid Robotics

**Feature**: 1-ai-humanoid-book
**Created**: 2025-12-21
**Status**: Draft

## Book Content Entity

### Attributes
- **id**: string (unique identifier for the book)
- **title**: string (AI/Spec-Driven Book on Physical AI & Humanoid Robotics Systems)
- **wordCount**: integer (3000-5000 range)
- **modules**: array of Module entities
- **capstone**: Capstone entity
- **references**: array of Reference entities
- **targetAudience**: array of strings (technical decision-makers, advanced students, engineering leaders)
- **createdDate**: date
- **lastUpdated**: date
- **version**: string

### Relationships
- Contains 4-5 Module entities (4 core modules + 1 capstone)
- Contains multiple Reference entities (minimum 8)
- Associated with academic research sources

### Validation Rules
- wordCount must be between 3000 and 5000
- modules array must contain exactly 4 core modules
- references array must contain minimum 8 entries
- title must match specification requirements

## Module Entity

### Attributes
- **id**: string (unique identifier like "module-1-ros2")
- **title**: string (descriptive title for the module)
- **content**: string (750-1250 words of technical content)
- **learningObjectives**: array of strings (clear outcomes)
- **relatedModules**: array of strings (IDs of related modules)
- **citations**: array of strings (IDs of citations used)
- **wordCount**: integer (750-1250 range)
- **moduleType**: string (enum: "middleware", "simulation", "ai-perception", "vla", "capstone")

### Relationships
- Belongs to one Book entity
- References multiple Reference entities
- Connected to other Module entities through relatedModules

### Validation Rules
- wordCount must be between 750 and 1250 for core modules
- moduleType must be one of the defined enum values
- learningObjectives must be present and non-empty
- content must be present and meet minimum word count

### State Transitions
- DRAFT → REVIEW → APPROVED → PUBLISHED

## Reference Entity

### Attributes
- **id**: string (unique identifier like "citation-001")
- **title**: string (title of the academic source)
- **authors**: array of strings (authors of the source)
- **journal**: string (publication venue)
- **year**: integer (publication year, 2015-2025 range)
- **doi**: string (Digital Object Identifier)
- **url**: string (URL to the source)
- **apaCitation**: string (full APA format citation)
- **usedInModules**: array of strings (IDs of modules using this reference)

### Relationships
- Referenced by multiple Module entities
- Belongs to one Book entity

### Validation Rules
- year must be between 2015 and 2025
- apaCitation must follow APA format standards
- title must be present and non-empty
- at least one of doi or url must be present

## Capstone Entity

### Attributes
- **id**: string (unique identifier like "capstone-autonomous-humanoid")
- **title**: string (The Autonomous Humanoid)
- **content**: string (300-500 words of integrated content)
- **scenario**: string (voice command to task completion scenario)
- **learningOutcome**: string (end-to-end understanding)
- **integratesModules**: array of strings (IDs of modules being integrated)
- **wordCount**: integer (300-500 range)

### Relationships
- Belongs to one Book entity
- Integrates multiple Module entities
- May reference Reference entities

### Validation Rules
- wordCount must be between 300 and 500
- integratesModules must reference at least 3 different modules
- scenario must be present and describe an end-to-end process

## Navigation Entity

### Attributes
- **id**: string (unique identifier like "nav-main")
- **structure**: object (hierarchical navigation structure)
- **links**: array of objects (navigation links with target and label)
- **currentPage**: string (ID of current page)
- **previousPage**: string (ID of previous page)
- **nextPage**: string (ID of next page)

### Relationships
- Associated with one Book entity
- References multiple Module entities
- References Capstone entity

### Validation Rules
- structure must form a valid navigation tree
- links must point to existing content entities
- previous and next page references must be valid

## Academic Source Entity

### Attributes
- **id**: string (unique identifier)
- **title**: string (title of the source)
- **authors**: array of strings (authors)
- **publicationType**: string (journal, conference, preprint, etc.)
- **publicationDate**: date (date of publication)
- **publisher**: string (publishing entity)
- **abstract**: string (summary of the content)
- **keywords**: array of strings (relevant keywords)
- **peerReviewed**: boolean (true if peer-reviewed)
- **relevanceScore**: number (0-100 relevance to topic)

### Relationships
- Connected to Reference entity (for citation purposes)
- May be referenced by multiple Module entities

### Validation Rules
- peerReviewed must be true to meet requirements
- publicationDate must be within last 10 years
- relevanceScore must be calculated based on content alignment