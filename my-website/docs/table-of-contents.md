---
sidebar_position: 0
---

# Table of Contents

## Book Structure

This book provides a comprehensive technical overview of the system architecture of modern humanoid robotics, focusing on how AI-driven middleware, simulation, perception, and language-action pipelines enable autonomous behavior.

## Modules Overview

### [Module 1: The Robotic Nervous System (ROS 2)](/docs/module-1-ros2)
- **Focus**: Middleware for robot control and communication
- **Topics Covered**:
  - ROS 2 Nodes, Topics, and Services
  - Distributed communication and real-time considerations
  - Bridging Python-based AI agents to ROS controllers using rclpy
  - Understanding URDF (Unified Robot Description Format) for humanoid robots
- **Learning Outcome**: Reader understands how ROS 2 functions as the nervous system of an autonomous robot

### [Module 2: The Digital Twin (Gazebo & Unity)](/docs/module-2-simulation)
- **Focus**: Physics simulation and environment modeling
- **Topics Covered**:
  - Physics simulation in Gazebo (gravity, collisions, constraints)
  - High-fidelity rendering and human-robot interaction in Unity
  - Sensor simulation: LiDAR, depth cameras, and IMUs
- **Learning Outcome**: Reader understands how digital twins reduce development risk and improve system validation

### [Module 3: The AI-Robot Brain (NVIDIA Isaac™)](/docs/module-3-ai-perception)
- **Focus**: Advanced perception, navigation, and training
- **Topics Covered**:
  - NVIDIA Isaac Sim for photorealistic simulation and synthetic data generation
  - Isaac ROS for hardware-accelerated perception and Visual SLAM (VSLAM)
  - Nav2 for path planning and navigation in bipedal humanoid robots
- **Learning Outcome**: Reader understands how AI perception and navigation stacks enable autonomous movement

### [Module 4: Vision-Language-Action (VLA)](/docs/module-4-vla)
- **Focus**: Convergence of large language models and robotics
- **Topics Covered**:
  - Voice-to-Action using OpenAI Whisper or equivalent speech recognition systems
  - Cognitive planning using LLMs to translate natural language commands into ROS 2 action sequences
  - Multimodal reasoning combining vision, language, and control
- **Learning Outcome**: Reader understands how AI planning and perception enable autonomous behavior

## [Capstone Project: The Autonomous Humanoid](/docs/capstone-project)

The conceptual capstone project demonstrates how a simulated robot receives a voice command, plans a task sequence, navigates obstacles, identifies an object using computer vision, and manipulates the object to complete the task.

## [References](/docs/references)

Academic citations and references supporting all technical claims in the book.

## Additional Resources

- [Quality Assurance Checklist](/docs/quality-assurance)
- [Success Criteria Verification](/docs/success-criteria-verification)

---

## Learning Path Options

### Complete Reading Path
For comprehensive understanding, follow the modules in sequence:
1. [Introduction](/docs/intro) → [Module 1](/docs/module-1-ros2) → [Module 2](/docs/module-2-simulation) → [Module 3](/docs/module-3-ai-perception) → [Module 4](/docs/module-4-vla) → [Capstone Project](/docs/capstone-project)

### Focused Reading Paths
- **For Middleware Specialists**: [Module 1](/docs/module-1-ros2) → [Module 3](/docs/module-3-ai-perception)
- **For Perception Experts**: [Module 2](/docs/module-2-simulation) → [Module 3](/docs/module-3-ai-perception) → [Module 4](/docs/module-4-vla)
- **For AI/ML Practitioners**: [Module 4](/docs/module-4-vla) → [Module 3](/docs/module-3-ai-perception) → [Capstone Project](/docs/capstone-project)

## Prerequisites

This book assumes:
- Basic understanding of robotics concepts
- Familiarity with software architecture principles
- Knowledge of AI and machine learning fundamentals
- Understanding of system integration concepts