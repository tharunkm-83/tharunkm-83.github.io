-- =====================================================
-- SUPABASE SETUP FOR THARUN K M PORTFOLIO
-- Run this SQL in your Supabase Dashboard > SQL Editor
-- =====================================================
-- WHAT'S HERE:
--   1. guestbook_notes  — kept, hidden from nav, admin-only management
--   2. page_views       — public read/write (view counter)
--   3. content_entries  — kept, hidden from nav, admin-only management
--   4. projects         — public read, admin write (your main use case)
--
-- REMOVED: photos table and storage bucket (not needed)
-- =====================================================


-- 1. GUESTBOOK NOTES TABLE
-- Hidden from public nav but table exists for future use.
-- Public can insert (anonymous messages) and read.
-- Update/delete locked to authenticated (you, via admin panel).
-- =====================================================
CREATE TABLE IF NOT EXISTS guestbook_notes (
    id BIGSERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE guestbook_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read guestbook notes"
ON guestbook_notes FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can insert guestbook notes"
ON guestbook_notes FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users (you) can delete entries
CREATE POLICY "Authenticated can delete guestbook notes"
ON guestbook_notes FOR DELETE
TO authenticated
USING (true);


-- 2. PAGE VIEWS TABLE
-- Tracks total page views. Public read + write (upsert counter).
-- =====================================================
CREATE TABLE IF NOT EXISTS page_views (
    id BIGSERIAL PRIMARY KEY,
    page_id TEXT UNIQUE NOT NULL,
    count INTEGER DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read page views"
ON page_views FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can insert page views"
ON page_views FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can update page views"
ON page_views FOR UPDATE
TO anon, authenticated
USING (true);


-- 3. CONTENT ENTRIES TABLE
-- Hidden from public nav but kept for your reading log / calendar.
-- Public can read. Only authenticated (you) can insert, update, delete.
-- =====================================================
CREATE TABLE IF NOT EXISTS content_entries (
    id BIGSERIAL PRIMARY KEY,
    date DATE NOT NULL,
    title TEXT NOT NULL,
    url TEXT,
    source TEXT,
    category TEXT DEFAULT 'article',
    thoughts TEXT,
    added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE content_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read content entries"
ON content_entries FOR SELECT
TO anon, authenticated
USING (true);

-- Insert / update / delete: authenticated only (you manage this via admin.html)
CREATE POLICY "Authenticated can insert content entries"
ON content_entries FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can update content entries"
ON content_entries FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated can delete content entries"
ON content_entries FOR DELETE
TO authenticated
USING (true);


-- 4. PROJECTS TABLE
-- Public-facing. Anyone can read. Only authenticated (you) can write.
-- This is the main table powering your Work/Projects section.
-- =====================================================
CREATE TABLE IF NOT EXISTS projects (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    highlight TEXT DEFAULT 'blue',
    brief_description TEXT NOT NULL,
    expanded_content TEXT,
    github_url TEXT,
    demo_url TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read projects"
ON projects FOR SELECT
TO anon, authenticated
USING (true);

-- Only authenticated (you) can add, edit, or remove projects
CREATE POLICY "Authenticated can insert projects"
ON projects FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated can update projects"
ON projects FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated can delete projects"
ON projects FOR DELETE
TO authenticated
USING (true);


-- =====================================================
-- SEED DATA: YOUR PROJECTS
-- Run this after the table is created.
-- Replace github_url values with your real repo links when ready.
-- =====================================================
INSERT INTO projects (name, highlight, brief_description, expanded_content, github_url, demo_url, sort_order) VALUES

(
  'Urban Transport Sustainability Index',
  'blue',
  'Composite index measuring transport sustainability across 11 Urban Local Bodies in India (2016–2024), covering environment, infrastructure, mobility, and safety.',
  '<p>Built a multi-dimensional sustainability index for 11 Urban Local Bodies spanning 2016–2024.</p>
   <p>★ <strong>Methodology:</strong> Combined indicators across four pillars — environment, infrastructure, mobility, and safety — using normalisation and weighted aggregation techniques.</p>
   <p>★ <strong>Data:</strong> Administrative transport records, census data, and publicly available urban infrastructure datasets.</p>
   <p>★ <strong>Output:</strong> Time-series index enabling cross-city and longitudinal comparison of urban transport performance.</p>',
  'https://github.com/tharunkm-83',
  NULL,
  1
),

(
  'Airport Runway Congestion Simulation',
  'lavender',
  'Modeled runway congestion at a major Indian airport using M/M/C queueing theory and discrete-event simulation in Python.',
  '<p>Applied operations research methods to understand and reduce runway congestion.</p>
   <p>★ <strong>Framework:</strong> M/M/C queueing model with multiple servers (runways), Poisson arrivals, and exponential service times.</p>
   <p>★ <strong>Tools:</strong> Python (SimPy for discrete-event simulation, NumPy, Matplotlib).</p>
   <p>★ <strong>Findings:</strong> Identified threshold traffic volumes beyond which average wait times grow non-linearly, with implications for slot scheduling policy.</p>',
  'https://github.com/tharunkm-83',
  NULL,
  2
),

(
  'Wage Determination Analysis (PLFS)',
  'peach',
  'Regression analysis on Periodic Labour Force Survey data examining demographic and structural determinants of wages in India.',
  '<p>Used Stata to analyse wage determinants from India''s Periodic Labour Force Survey (PLFS).</p>
   <p>★ <strong>Methods:</strong> OLS and log-linear regression, controlling for education, sector, geography, and gender.</p>
   <p>★ <strong>Variables:</strong> Demographic characteristics, industry classification, employment type (regular/casual/self-employed).</p>
   <p>★ <strong>Findings:</strong> Documented significant wage penalties associated with informal employment and regional disparities in returns to education.</p>',
  'https://github.com/tharunkm-83',
  NULL,
  3
),

(
  'Rainfall Data Visualisation (NetCDF)',
  'blue',
  'Processed gridded IPCC-aligned climate data for India and generated temporal GIF visualisations showing rainfall distribution over time.',
  '<p>Worked with NetCDF climate datasets to build animated temporal visualisations of Indian rainfall patterns.</p>
   <p>★ <strong>Data:</strong> Gridded precipitation data from IMD/global reanalysis datasets, processed using xarray and netCDF4.</p>
   <p>★ <strong>Tools:</strong> Python (xarray, matplotlib, cartopy, imageio for GIF generation).</p>
   <p>★ <strong>Output:</strong> Animated maps showing seasonal and inter-annual rainfall variability across Indian districts.</p>',
  'https://github.com/tharunkm-83',
  NULL,
  4
),

(
  'Human Activity Recognition (HAR)',
  'lavender',
  'ML classification project on sensor data, involving feature engineering, model selection, and evaluation on a benchmark HAR dataset.',
  '<p>Built and evaluated machine learning models for classifying human physical activities from accelerometer and gyroscope data.</p>
   <p>★ <strong>Methods:</strong> Feature extraction from raw time-series, Random Forest and SVM classifiers, cross-validation.</p>
   <p>★ <strong>Tools:</strong> Python (scikit-learn, pandas, seaborn).</p>
   <p>★ <strong>Result:</strong> Achieved strong classification accuracy on the UCI HAR benchmark dataset; analysed feature importance to identify the most discriminative sensor signals.</p>',
  'https://github.com/tharunkm-83',
  NULL,
  5
);
