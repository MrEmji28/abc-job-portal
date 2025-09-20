export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'freelance' | 'internship'
export type ApplicationStatus = 'submitted' | 'under_review' | 'shortlisted' | 'rejected' | 'hired'
export type PostVisibility = 'public' | 'followers' | 'admin'
export type CampaignStatus = 'draft' | 'scheduled' | 'sent' | 'canceled'
export type DeliveryStatus = 'queued' | 'sent' | 'bounced' | 'opened' | 'failed'

export interface Profile {
  user_id: string
  full_name?: string
  headline?: string
  bio?: string
  avatar_url?: string
  location?: string
  contact_email?: string
  created_at: string
  updated_at: string
}

export interface Job {
  id: string
  title: string
  company: string
  location?: string
  employment_type: EmploymentType
  description?: string
  salary_min?: number
  salary_max?: number
  currency: string
  is_active: boolean
  posted_by: string
  created_at: string
  updated_at: string
}

export interface JobApplication {
  id: string
  job_id: string
  applicant_id: string
  status: ApplicationStatus
  resume_url?: string
  cover_letter?: string
  created_at: string
  updated_at: string
}
