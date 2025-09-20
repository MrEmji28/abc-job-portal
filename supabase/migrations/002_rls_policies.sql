-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE mail_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE mail_recipients ENABLE ROW LEVEL SECURITY;

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles ur
    JOIN roles r ON ur.role_id = r.id
    WHERE ur.user_id = $1 AND r.name = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON profiles FOR SELECT USING (TRUE);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);

-- Jobs policies
CREATE POLICY "Anyone can view active jobs" ON jobs FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Admins can manage jobs" ON jobs FOR ALL USING (is_admin(auth.uid()));

-- Job applications policies
CREATE POLICY "Users can view own applications" ON job_applications FOR SELECT USING (auth.uid() = applicant_id OR is_admin(auth.uid()));
CREATE POLICY "Users can apply to jobs" ON job_applications FOR INSERT WITH CHECK (auth.uid() = applicant_id);
CREATE POLICY "Users can update own applications" ON job_applications FOR UPDATE USING (auth.uid() = applicant_id);
CREATE POLICY "Admins can view all applications" ON job_applications FOR SELECT USING (is_admin(auth.uid()));

-- Posts policies
CREATE POLICY "Users can view public posts" ON posts FOR SELECT USING (visibility = 'public' OR auth.uid() = author_id OR is_admin(auth.uid()));
CREATE POLICY "Users can create posts" ON posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users can update own posts" ON posts FOR UPDATE USING (auth.uid() = author_id OR is_admin(auth.uid()));
CREATE POLICY "Users can delete own posts" ON posts FOR DELETE USING (auth.uid() = author_id OR is_admin(auth.uid()));

-- Post comments policies
CREATE POLICY "Users can view comments on visible posts" ON post_comments FOR SELECT USING (
  EXISTS (SELECT 1 FROM posts WHERE id = post_id AND (visibility = 'public' OR auth.uid() = author_id OR is_admin(auth.uid())))
);
CREATE POLICY "Users can create comments" ON post_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own comments" ON post_comments FOR UPDATE USING (auth.uid() = user_id OR is_admin(auth.uid()));
CREATE POLICY "Users can delete own comments" ON post_comments FOR DELETE USING (auth.uid() = user_id OR is_admin(auth.uid()));

-- Post likes policies
CREATE POLICY "Users can view likes on visible posts" ON post_likes FOR SELECT USING (
  EXISTS (SELECT 1 FROM posts WHERE id = post_id AND (visibility = 'public' OR auth.uid() = author_id OR is_admin(auth.uid())))
);
CREATE POLICY "Users can like posts" ON post_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can unlike posts" ON post_likes FOR DELETE USING (auth.uid() = user_id);

-- Mail campaigns policies (admin only)
CREATE POLICY "Admins can manage campaigns" ON mail_campaigns FOR ALL USING (is_admin(auth.uid()));
CREATE POLICY "Admins can manage recipients" ON mail_recipients FOR ALL USING (is_admin(auth.uid()));
