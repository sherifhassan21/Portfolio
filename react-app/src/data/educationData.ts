export type EducationEntry = {
  id: string
  title: string
  institution: string
  period: string
  location?: string
  detail?: string
  logoUrl?: string
  certificateUrl?: string
  status?: string
}

export type TrainingGroup = {
  id: string
  title: string
  entries: EducationEntry[]
}

/** 
 * Add certificateUrl only when an actual certificate or verification link is available.
 * Logo URLs are official-site favicons, not certificate artwork.
 */
export const academicBackground: EducationEntry[] = [
  {
    id: 'cairo-university',
    title: 'Professional Diploma in Project Management',
    institution: 'Cairo University | Faculty of Graduate Studies for Statistical Research',
    location: 'Cairo, Egypt',
    period: '2026 – In Progress',
    status: 'In progress',
    logoUrl: 'https://www.google.com/s2/favicons?domain=cu.edu.eg&sz=128',
  },
  {
    id: 'future-academy',
    title: 'Bachelor of Information Technology',
    institution: 'Future Academy',
    location: 'Cairo, Egypt',
    period: '2008 – 2012',
    detail: 'Graduated with Excellent (91.2%), ranked 4th.',
    logoUrl: 'https://www.google.com/s2/favicons?domain=futureacademyegypt.com&sz=128',
  },
]

export const trainingGroups: TrainingGroup[] = [
  {
    id: 'project-management',
    title: 'Project Management & IT Service Management',
    entries: [
      { id: 'itil', title: 'ITIL v4 Fundamentals', institution: 'Global Knowledge', period: '13 Nov. 2019 – 20 Nov. 2019' },
      { id: 'pmp-odc', title: 'PMP Exam Preparation & Project Management Training', institution: 'Orange Digital Center (ODC), Egypt', period: 'Sep 2026', detail: '21 Training Hours', logoUrl: 'https://www.google.com/s2/favicons?domain=orangedigitalcenters.com&sz=128' },
      { id: 'pmp-nti', title: 'PMP Exam Preparation & Project Management Training', institution: 'National Telecommunication Institute (NTI), Egypt', period: 'Mar–May 2023', logoUrl: 'https://www.google.com/s2/favicons?domain=nti.sci.eg&sz=128' },
    ],
  },
  {
    id: 'cloud-data',
    title: 'Cloud, Microsoft & Data',
    entries: [
      { id: 'power-bi', title: 'Microsoft Power BI Engineer (MS PBI)', institution: 'MCIT', period: '26 Oct. 2024 – 20 Mar. 2025', logoUrl: 'https://www.google.com/s2/favicons?domain=mcit.gov.eg&sz=128' },
      { id: 'aws', title: 'AWS Cloud Practitioner Essentials', institution: 'Global Knowledge', period: '24 Aug. 2023' },
      { id: 'tsql', title: 'Querying Data with Transact-SQL | 20761C', institution: 'New Horizons', period: '26 Feb. 2023 – 02 Mar. 2023' },
      { id: 'mcsa', title: 'MCSA: Windows Server 2012', institution: 'RTC', period: '09 Oct. 2016 – 29 Dec. 2016' },
      { id: 'pl400', title: 'PL-400: Microsoft Power Platform Developer', institution: 'Global Knowledge', period: '07 Oct. 2021 – 18 Oct. 2021' },
    ],
  },
  {
    id: 'network-security',
    title: 'Networking & Cybersecurity',
    entries: [
      { id: 'cyberops', title: 'CyberOps Associate', institution: 'NTI', period: '20 Mar. 2022 – 20 Apr. 2022', logoUrl: 'https://www.google.com/s2/favicons?domain=nti.sci.eg&sz=128' },
      { id: 'ccna-security', title: 'CCNA Security', institution: 'NTI', period: '15 Jan. 2022 – 19 Mar. 2022', logoUrl: 'https://www.google.com/s2/favicons?domain=nti.sci.eg&sz=128' },
      { id: 'ccna-v7', title: 'CCNA v7', institution: 'NTI', period: '17 Oct. 2021 – 10 Jan. 2022', logoUrl: 'https://www.google.com/s2/favicons?domain=nti.sci.eg&sz=128' },
      { id: 'network-plus', title: 'CompTIA Network+', institution: 'ISI Academy', period: '12 Jan. 2016 – 09 Mar. 2016' },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    entries: [
      { id: 'ai-agent', title: 'AI Agent', institution: 'Digital Hub & Orange Digital Center', period: '24 Oct. 2026 – 14 Nov. 2026', status: 'In progress', logoUrl: 'https://www.google.com/s2/favicons?domain=orangedigitalcenters.com&sz=128' },
    ],
  },
]
