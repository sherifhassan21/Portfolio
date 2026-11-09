export type AchievementGroup = { title: string; items: string[] }
export type CareerRole = {
  id: string
  title: string
  company: string
  period: string
  location: string
  summary: string
  groups: AchievementGroup[]
  focus: string[]
}

export const careerRoles: CareerRole[] = [
  {
    id: 'shadwan',
    title: 'IT & Digital Transformation Manager',
    company: 'Shadwan International Co.',
    period: 'Aug 2025 – Sep 2026',
    location: 'Jeddah, Saudi Arabia',
    summary: 'Led enterprise IT operations and digital transformation across a diversified business group spanning automotive, hospitality, marketing, and contact center operations.',
    focus: ['IT Leadership', 'ERP', 'Infrastructure', 'Cybersecurity', 'Automation'],
    groups: [
      { title: 'PEOPLE | Leadership, Talent Development & Governance', items: [
        'People Leadership & Performance Management: Established career paths, promotion criteria, and performance KPIs, increasing IT team productivity by 60% and strengthening accountability.',
        'Talent Development & Team Capability Building: Introduced technical training and mentoring programs, increasing team competency assessment scores by 75% and reducing senior-level escalations by 25%.',
        'IT Governance & Employee Policy Development: Developed employee IT policies and security guidelines, improving policy compliance by 70% and promoting responsible technology use.',
      ] },
      { title: 'TECHNOLOGY | Infrastructure, Cybersecurity & Digital Innovation', items: [
        'Data Center & Infrastructure Modernization: Designed and established a centralized data center aligned with ISO 27001 principles, implementing backup and recovery solutions to protect critical systems and support 24/7 business operations.',
        'Enterprise Network Transformation: Unified 90+ network devices under centralized management, improving network performance and reducing network-related incidents by over 90%.',
        'Cybersecurity & Risk Mitigation: Deployed Kaspersky EDR across the organization, achieving 99% endpoint coverage and reducing malware incidents by 70%.',
        'IT Service Management & Operational Excellence: Implemented centralized ITSM and standardized support procedures, reducing incident resolution time by 25% and improving user satisfaction by 20%.',
        'Enterprise Open-Source Innovation: Adopted GLPI, Zabbix, NetBox, Proxmox, and n8n to improve monitoring, IT operations, and automation, reducing selected software costs by up to 90%.',
      ] },
      { title: 'BUSINESS | Digital Transformation, Financial Impact & Strategic Value', items: [
        'Enterprise Digital Transformation & ERP Implementation: Led the end-to-end Odoo ERP implementation and go-live in just 3 months for 92 users, integrating business workflows and reducing manual processes by 85% despite a demanding timeline.',
        'Financial Optimization: Modernized the organization’s communications infrastructure by replacing the legacy platform with 3CX, improving communication efficiency and generating over SAR 120,000 in annual telecommunications savings.',
        'Financial & Strategic Procurement: Led technology investment planning, vendor evaluations, and contract negotiations, aligning procurement decisions with business priorities and delivering over SAR 90K in cost savings.',
        'AI-Driven Business Innovation: Led the development of AI agents for Sales, HR, and IT, reducing sales processing time by 89%, HR workflow time by 30%, and IT operational task time by 55%.',
      ] },
    ],
  },
  {
    id: 'maf',
    title: 'Country IT Operations Coordinator',
    company: 'Majid Al Futtaim',
    period: 'Jan 2024 – Aug 2025',
    location: 'Almaza, Cairo',
    summary: 'Coordinated enterprise IT operations and business-critical technology services across three business units and 9 locations, including Ski Egypt, Magic Planet, and VOX Cinemas. Supported infrastructure reliability, digital transformation, operational excellence, and technology governance while ensuring business continuity and alignment with organizational objectives.',
    focus: ['Operations Governance', 'Enterprise Applications', 'People Leadership', 'Compliance'],
    groups: [
      { title: 'PEOPLE | Leadership & Team Development', items: [
        'People Leadership & Performance Optimization: Led and developed a two-member IT team, optimizing workload distribution, clarifying responsibilities, and introducing performance-driven practices, contributing to a 30% improvement in team productivity.',
        'Team Engagement & Employee Retention: Fostered a collaborative working environment through technical coaching, knowledge sharing, and balanced workload management, achieving 100% team retention throughout the period.',
      ] },
      { title: 'TECHNOLOGY | IT Operations, Governance & Service Excellence', items: [
        'IT Governance & Operational Excellence: Standardized IT policies, service delivery frameworks, and operational procedures across three business units, achieving a 35% year-over-year improvement in operational efficiency.',
        'Enterprise Systems Reliability: Strengthened monitoring and support for Microsoft Dynamics AX, Galaxy, Embed, Vista, and SQL Server across nine entertainment locations, achieving 99.5% system availability and reducing recurring application incidents by 30%.',
        'IT Service Management & Incident Optimization: Streamlined incident management, escalation workflows, and service coordination across multiple locations, reducing average incident resolution time by 25%.',
      ] },
      { title: 'BUSINESS | Digital Transformation & Business Value', items: [
        'Digital Transformation & Regulatory Compliance: Led the successful E-Invoicing implementation for Magic Planet, delivering the project on schedule and achieving 100% compliance with Egyptian Tax Authority requirements.',
        'Business Process Optimization: Improved coordination between IT, business teams, and technology vendors across three business units, reducing technology-related operational delays by 25%.',
        'Project Delivery & Execution: Enhanced project visibility, accountability, and stakeholder coordination through Jira-based tracking and structured reporting, achieving 95% on-time task completion.',
      ] },
    ],
  },
  {
    id: 'lcwaikiki',
    title: 'Senior IT Specialist',
    company: 'LCWAIKIKI',
    period: 'Jan 2019 – Jan 2024',
    location: 'Maadi, Cairo',
    summary: 'Managed IT infrastructure and technology operations supporting 20 retail stores and 370+ users across retail, head-office, and sourcing functions, ensuring reliable service delivery and supporting business expansion.',
    focus: ['Retail Technology', 'Infrastructure & Cloud', 'IT Project Delivery'],
    groups: [
      { title: 'PEOPLE | Collaboration & Knowledge Development', items: [
        'IT Knowledge & User Empowerment: Developed 29 troubleshooting guides, increasing employee self-service capabilities by 30% and reducing reliance on direct IT support.',
        'Cross-Functional Collaboration: Coordinated internal teams, external IT vendors, and business stakeholders to support technology deployments, resolve operational challenges, and improve service delivery across 20 stores.',
      ] },
      { title: 'TECHNOLOGY | Infrastructure, Security & IT Governance', items: [
        'Infrastructure & Cloud Operations: Managed Cisco Meraki network monitoring, Active Directory, and AWS services (EC2, S3, IAM), supporting secure and reliable IT operations for 370+ users.',
        'IT Governance & Service Quality: Standardized IT policies, support procedures, and task management practices across retail operations, improving service consistency, operational accountability, and issue resolution.',
      ] },
      { title: 'BUSINESS | Retail Expansion & Project Delivery', items: [
        'Retail Expansion & Operational Efficiency: Led IT deployments for 21+ store openings and integrations, reducing technical setup time from 7 to 3 days (57% faster) and supporting quicker store readiness.',
        'Enterprise IT Project Delivery: Coordinated 6 major technology projects, including Microsoft Dynamics AX R3, E-Invoicing, and HR & Payroll implementations, using Jira to strengthen project tracking, stakeholder coordination, and delivery accountability.',
      ] },
    ],
  },
  {
    id: 'future-academy',
    title: 'IT Specialist',
    company: 'Future Academy',
    period: 'Jun 2016 – Dec 2018',
    location: 'Heliopolis, Cairo',
    summary: 'Managed and supported IT infrastructure, user systems, and digital learning environments for a leading academy specializing in information systems.',
    focus: ['Network Infrastructure', 'Desktop Virtualization', 'Asset Management'],
    groups: [
      { title: 'Key Achievements', items: [
        'Infrastructure Modernization: Upgraded key network connections from wireless to wired infrastructure, reducing system failures by 60%.',
        'Desktop Virtualization: Introduced NComputing virtualization across academic laboratories, deploying 35+ virtual desktops and simplifying system administration.',
        'IT Asset Management: Developed a centralized asset tracking system, improving equipment visibility, inventory control, and resource allocation.',
        'Technical Knowledge Development: Created IT documentation and trained new team members, improving troubleshooting consistency and knowledge sharing.',
      ] },
    ],
  },
  {
    id: 'itdata',
    title: 'IT Support Specialist → IT Team Lead',
    company: 'ITDATA',
    period: 'Sep 2013 – Mar 2016',
    location: 'Heliopolis, Cairo',
    summary: 'Managed IT support operations and service delivery, earning a promotion to IT Team Lead through strong performance and leadership skills, with expanded responsibility for team development and service quality.',
    focus: ['Team Leadership', 'IT Support', 'Service Quality', 'Asset Control'],
    groups: [
      { title: 'IT Team Lead | Jan 2015 – Mar 2016', items: [
        'IT Service Optimization: Streamlined technical support processes and escalation workflows, reducing incoming support tickets by 40% and improving service efficiency.',
        'Team Leadership & Development: Led technical support operations, introducing structured training, coaching, and workload management practices that increased team productivity by 25%.',
        'Customer Experience & Service Quality: Strengthened service delivery standards and issue resolution practices, achieving an 88% customer satisfaction rating.',
        'IT Infrastructure Planning: Designed the network layout and IT equipment allocation plan for a new head office, supporting an organized infrastructure deployment and operational readiness.',
      ] },
      { title: 'IT Support Specialist | Sep 2013 – Dec 2014', items: [
        'IT Service Excellence: Resolved 980+ technical support tickets within one year, achieving a 91% service quality rating through effective troubleshooting and timely issue resolution.',
        'IT Asset Management: Improved inventory tracking and asset control procedures, reducing equipment loss by 30% and strengthening accountability for IT resources.',
      ] },
    ],
  },
]
