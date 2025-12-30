import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'complete-guide-zyotra-services',
    title: 'Complete Guide to All Zyotra Services: Everything You Need to Know',
    excerpt: 'A comprehensive overview of every service Zyotra offers - from VPS management to database tools, deployments, and monitoring. Everything in one place.',
    content: `
      <p>Zyotra is a complete platform for deploying and managing your infrastructure on Ubuntu servers. Whether you're a startup shipping your first MVP or an enterprise managing hundreds of deployments, Zyotra provides all the tools you need in one unified interface.</p>
      
      <p>In this comprehensive guide, we'll walk through every service Zyotra offers and how they work together to eliminate infrastructure friction.</p>
      
      <h2>1. VPS Instance Management</h2>
      <p>At the core of Zyotra is VPS management. Connect any Ubuntu server to your account and manage it through our intuitive dashboard.</p>
      
      <h3>What You Get:</h3>
      <ul>
        <li><strong>Real-time Monitoring</strong>: Track CPU, memory, and disk usage with live metrics</li>
        <li><strong>Process Management</strong>: View all running processes, their resource usage, and status</li>
        <li><strong>System Information</strong>: See OS version, CPU details, and hardware specifications</li>
        <li><strong>SSH Access</strong>: Connect via SSH credentials or SSH keys</li>
        <li><strong>Multi-VPS Support</strong>: Manage multiple servers from a single dashboard</li>
      </ul>
      
      <p>No more SSHing into servers to check status. Everything is visible at a glance in your dashboard.</p>
      
      <h2>2. Visual Database Management</h2>
      <p>Zyotra's database management is revolutionary - it brings PostgreSQL administration to your browser with zero command-line knowledge required.</p>
      
      <h3>Database Overview</h3>
      <p>Each database you create shows:</p>
      <ul>
        <li><strong>Connection Details</strong>: Host, port, username, database name</li>
        <li><strong>Connection Strings</strong>: Ready-to-use strings for both external and localhost connections</li>
        <li><strong>Status Monitoring</strong>: Real-time database health and status</li>
        <li><strong>Creation Date</strong>: Track when databases were created</li>
      </ul>
      
      <h3>Table Browser</h3>
      <p>The visual table browser lets you:</p>
      <ul>
        <li>Browse all public tables in your database</li>
        <li>View the first 100 rows of any table instantly</li>
        <li>See table structure and column types</li>
        <li>Navigate your database schema visually</li>
      </ul>
      
      <p>Perfect for non-technical team members who need to access data without learning SQL.</p>
      
      <h3>SQL Query Runner</h3>
      <p>For developers and power users, the SQL Editor provides:</p>
      <ul>
        <li><strong>Full SQL Support</strong>: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, and more</li>
        <li><strong>Real-time Results</strong>: See query results instantly in a formatted table</li>
        <li><strong>Execution Metrics</strong>: View execution time and affected rows</li>
        <li><strong>Query History</strong>: Track all executed queries</li>
        <li><strong>Error Handling</strong>: Clear error messages for debugging</li>
      </ul>
      
      <h3>Database Backups</h3>
      <p>Protect your data with one-click backups:</p>
      <ul>
        <li><strong>Create Backups</strong>: Generate full database dumps instantly</li>
        <li><strong>Access Backups</strong>: Download or restore from any previous backup</li>
        <li><strong>Automated Scheduling</strong>: Set up regular backup schedules (coming soon)</li>
      </ul>
      
      <h2>3. Full-Stack Application Deployment</h2>
      <p>Deploy entire applications from GitHub in under a minute. Zyotra supports multiple service types:</p>
      
      <h3>Web Service / Backend</h3>
      <p>Deploy your API servers and backend services:</p>
      <ul>
        <li><strong>Supported Languages</strong>: Node.js, Python, Go, Ruby, PHP, and more</li>
        <li><strong>Automatic Builds</strong>: Zyotra detects your project type and builds automatically</li>
        <li><strong>Environment Variables</strong>: Configure secrets and environment settings</li>
        <li><strong>Process Management</strong>: Automatic process monitoring and restart</li>
      </ul>
      
      <h3>UI Layer (Frontend)</h3>
      <p>Deploy static sites and single-page applications:</p>
      <ul>
        <li><strong>Frameworks Supported</strong>: React, Vue, Angular, Svelte, Next.js</li>
        <li><strong>Build Optimization</strong>: Automatic production builds</li>
        <li><strong>Asset Serving</strong>: Optimized static asset delivery</li>
        <li><strong>SPA Routing</strong>: Proper routing configuration for single-page apps</li>
      </ul>
      
      <h3>Database Services</h3>
      <p>Deploy and manage database instances:</p>
      <ul>
        <li><strong>PostgreSQL</strong>: Full-featured relational database</li>
        <li><strong>MySQL</strong>: Coming soon</li>
        <li><strong>MongoDB</strong>: Coming soon</li>
        <li><strong>Automatic Configuration</strong>: Pre-configured with best practices</li>
      </ul>
      
      <h3>Caching Services</h3>
      <p>Deploy Redis and other caching solutions:</p>
      <ul>
        <li><strong>Redis</strong>: In-memory data structure store</li>
        <li><strong>Memcached</strong>: Coming soon</li>
        <li><strong>Performance Optimization</strong>: Pre-configured for optimal performance</li>
      </ul>
      
      <h2>4. GitHub Integration</h2>
      <p>Deploy directly from your GitHub repositories with seamless integration:</p>
      
      <h3>Public Repositories</h3>
      <p>Deploy from any public GitHub repository instantly. Just paste the URL and Zyotra handles the rest.</p>
      
      <h3>Private Repositories</h3>
      <p>For private repos, authenticate your VPS with GitHub:</p>
      <ul>
        <li><strong>Personal Access Tokens</strong>: Secure authentication using GitHub PATs</li>
        <li><strong>Per-VPS Authentication</strong>: Each VPS can have its own GitHub credentials</li>
        <li><strong>Automatic Cloning</strong>: Zyotra clones and deploys automatically</li>
      </ul>
      
      <h3>Automatic Deployments</h3>
      <p>Set up automatic deployments on push (coming soon):</p>
      <ul>
        <li>Deploy on every commit to main branch</li>
        <li>Deploy on pull request merges</li>
        <li>Branch-based deployments for feature testing</li>
      </ul>
      
      <h2>5. Domain Management</h2>
      <p>Configure custom domains for your deployments:</p>
      <ul>
        <li><strong>Custom Domain Setup</strong>: Point your domain to any deployment</li>
        <li><strong>SSL Certificates</strong>: Automatic SSL/TLS certificate provisioning</li>
        <li><strong>Subdomain Support</strong>: Deploy to subdomains easily</li>
        <li><strong>DNS Configuration</strong>: Simple DNS setup instructions</li>
      </ul>
      
      <h2>6. Monitoring & Observability</h2>
      <p>Keep track of your infrastructure health:</p>
      
      <h3>VPS Monitoring</h3>
      <ul>
        <li><strong>CPU Usage</strong>: Real-time CPU metrics and history</li>
        <li><strong>Memory Usage</strong>: RAM consumption with detailed breakdown</li>
        <li><strong>Disk Usage</strong>: Storage monitoring and alerts</li>
        <li><strong>Network Stats</strong>: Bandwidth usage and network performance</li>
        <li><strong>Process Monitoring</strong>: View all running processes and their resource usage</li>
      </ul>
      
      <h3>Deployment Monitoring</h3>
      <ul>
        <li><strong>Deployment Status</strong>: Track deployment progress in real-time</li>
        <li><strong>Build Logs</strong>: View detailed build and deployment logs</li>
        <li><strong>Health Checks</strong>: Automatic health monitoring for deployed services</li>
        <li><strong>Error Tracking</strong>: View and debug deployment errors</li>
      </ul>
      
      <h2>7. Project Management</h2>
      <p>Organize all your deployments in one place:</p>
      <ul>
        <li><strong>Project Dashboard</strong>: View all your projects at a glance</li>
        <li><strong>Project Details</strong>: See deployment ID, Git repository, and status</li>
        <li><strong>Quick Actions</strong>: Restart, redeploy, or delete projects instantly</li>
        <li><strong>Project Search</strong>: Find projects quickly with search functionality</li>
      </ul>
      
      <h2>8. Security Features</h2>
      <p>Enterprise-grade security built-in:</p>
      <ul>
        <li><strong>SSH Key Management</strong>: Secure server access with SSH keys</li>
        <li><strong>Environment Variables</strong>: Secure storage of secrets and API keys</li>
        <li><strong>Access Control</strong>: Team permissions and role-based access (coming soon)</li>
        <li><strong>Audit Logs</strong>: Track all actions and changes</li>
        <li><strong>SSL/TLS</strong>: Automatic HTTPS for all deployments</li>
      </ul>
      
      <h2>9. Backup & Recovery</h2>
      <p>Never lose your data:</p>
      <ul>
        <li><strong>Database Backups</strong>: One-click database backups</li>
        <li><strong>Backup Storage</strong>: Secure backup storage and management</li>
        <li><strong>Point-in-Time Recovery</strong>: Restore to any backup point</li>
        <li><strong>Automated Backups</strong>: Schedule regular backups (coming soon)</li>
      </ul>
      
      <h2>10. Developer Experience</h2>
      <p>Built for developers, by developers:</p>
      <ul>
        <li><strong>Intuitive UI</strong>: Clean, modern interface that's easy to navigate</li>
        <li><strong>Fast Deployments</strong>: Deploy instantly, focus on building</li>
        <li><strong>No Configuration Files</strong>: Zero YAML, zero Dockerfiles required</li>
        <li><strong>Visual Tools</strong>: Database management without command line</li>
        <li><strong>Comprehensive Logs</strong>: Detailed logs for debugging</li>
      </ul>
      
      <h2>How It All Works Together</h2>
      <p>Here's a typical workflow:</p>
      
      <ol>
        <li><strong>Connect Your VPS</strong>: Add your Ubuntu server with SSH credentials</li>
        <li><strong>Create a Database</strong>: Deploy PostgreSQL with one click</li>
        <li><strong>Deploy Your Backend</strong>: Connect your GitHub repo and deploy your API</li>
        <li><strong>Deploy Your Frontend</strong>: Deploy your React/Vue/Angular app</li>
        <li><strong>Set Up Redis</strong>: Add caching for better performance</li>
        <li><strong>Configure Domain</strong>: Point your custom domain to your deployment</li>
        <li><strong>Monitor Everything</strong>: Track performance and health in real-time</li>
      </ol>
      
      <p>All of this happens instantly. What traditionally takes a DevOps engineer weeks to set up, Zyotra automates completely.</p>
      
      <h2>Who Benefits from Zyotra?</h2>
      
      <h3>Startups</h3>
      <p>For startups, Zyotra is a survival tool. It eliminates the need for expensive DevOps hires early on, allowing founders to focus on product-market fit instead of infrastructure. Deploy your MVP faster than ever.</p>
      
      <h3>Enterprises</h3>
      <p>For enterprises, Zyotra functions as an Internal Developer Platform (IDP). It eliminates deployment bottlenecks, enables self-service for engineering teams, and frees up senior DevOps engineers to focus on complex SRE tasks.</p>
      
      <h3>Developers</h3>
      <p>For developers, Zyotra removes all infrastructure friction. No more wrestling with configuration files, Docker setups, or deployment scripts. Just code, commit, and deploy.</p>
      
      <h2>Getting Started</h2>
      <p>Ready to experience the future of deployment? <a href="https://zyotraportal.ramkrishna.cloud/register">Sign up for free</a> and deploy your first application instantly.</p>
      
      <p>Have questions? Check out our <a href="/docs">documentation</a> or reach out to our team. We're here to help you ship faster.</p>
    `,
    author: 'Ram Krishna Yadav',
    authorRole: 'Founder',
    date: 'December 27, 2025',
    readTime: '12 min read',
    category: 'Guide',
    featured: true,
  },
  {
    id: 'introducing-zyotra',
    title: 'Introducing Zyotra: Deploy Servers in Seconds',
    excerpt: 'We built Zyotra to simplify server deployment and database management. Learn how our platform automates everything you do on Ubuntu.',
    content: `
      <p>Today, we're excited to introduce Zyotra - a platform that transforms how developers deploy and manage their applications on Ubuntu servers.</p>
      
      <h2>The Problem We're Solving</h2>
      <p>Setting up a server traditionally involves countless manual steps: SSH connections, package installations, database configuration, security hardening, and deployment scripts. This process is time-consuming, error-prone, and repetitive.</p>
      
      <h2>Our Solution</h2>
      <p>Zyotra automates the entire workflow. Connect your VPS, link your GitHub repository, and deploy with a single click. Our visual database interface lets you browse tables and run queries without touching the command line.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>One-Click Deployments</strong>: Deploy from GitHub instantly</li>
        <li><strong>Visual Database Management</strong>: Browse PostgreSQL tables, run queries, manage backups</li>
        <li><strong>Real-time Monitoring</strong>: Track CPU, memory, and disk usage live</li>
        <li><strong>Automatic Domain Setup</strong>: Configure custom domains with SSL certificates</li>
      </ul>
      
      <h2>What's Next</h2>
      <p>We're just getting started. Our roadmap includes MySQL support, automated backups scheduling, and team collaboration features. Stay tuned!</p>
    `,
    author: 'Ram Krishna Yadav',
    authorRole: 'Founder',
    date: 'December 26, 2025',
    readTime: '4 min read',
    category: 'Announcement',
  },
  {
    id: 'database-management-guide',
    title: 'Complete Guide to Database Management in Zyotra',
    excerpt: 'Learn how to create databases, browse tables, run SQL queries, and manage backups using Zyotra\'s visual interface.',
    content: `
      <p>Managing databases shouldn't require memorizing terminal commands. Zyotra's visual database interface makes PostgreSQL management accessible to everyone.</p>
      
      <h2>Creating a Database</h2>
      <p>Navigate to the Databases section and click "Create Database". Choose PostgreSQL, set your credentials, and you're done. Zyotra handles the installation and configuration automatically.</p>
      
      <h2>Using the Table Browser</h2>
      <p>The Table Browser shows all your public tables in a sidebar. Click any table to view its data - we display the first 100 rows instantly. No SQL required.</p>
      
      <h2>Running Queries</h2>
      <p>For more complex operations, use the Query Runner. Write your SQL, click "Run Query", and see results immediately. We show execution time and affected rows for every query.</p>
      
      <h2>Managing Backups</h2>
      <p>Never lose your data. Click "Create Backup" to generate a full database dump. Access your backups anytime from the database overview page.</p>
    `,
    author: 'Ram Krishna Yadav',
    authorRole: 'Founder',
    date: 'December 25, 2025',
    readTime: '5 min read',
    category: 'Tutorial',
  },
  {
    id: 'github-deployments',
    title: 'How to Deploy from Private GitHub Repositories',
    excerpt: 'Step-by-step guide to authenticating your VPS with GitHub and deploying private repositories.',
    content: `
      <p>Deploying from private repositories requires authentication. Here's how to set it up in Zyotra.</p>
      
      <h2>Step 1: Generate a Personal Access Token</h2>
      <p>Go to GitHub Settings → Developer Settings → Personal Access Tokens → Tokens (classic). Generate a new token with the 'repo' scope.</p>
      
      <h2>Step 2: Authenticate Your VPS</h2>
      <p>In Zyotra, go to VPS Machines and click the "Authenticate GitHub" action. Enter your GitHub username and the personal access token you just created.</p>
      
      <h2>Step 3: Deploy Your Project</h2>
      <p>Now you can deploy from any private repository you have access to. Create a new project, paste your repository URL, and Zyotra will clone and deploy it automatically.</p>
      
      <h2>Security Note</h2>
      <p>Your token is stored securely on your VPS and is only used for git operations. We never have access to your GitHub credentials.</p>
    `,
    author: 'Ram Krishna Yadav',
    authorRole: 'Founder',
    date: 'December 24, 2025',
    readTime: '3 min read',
    category: 'Tutorial',
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Announcement', 'Tutorial', 'Engineering'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#1a1a22] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>

          {/* Article Header */}
          <article>
            <div className="mb-8">
              <span className="px-3 py-1 rounded-full bg-[#e4b2b3]/10 text-[#e4b2b3] text-sm font-medium">
                {selectedPost.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>{selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-gray-400
                prose-strong:text-white
                prose-ul:space-y-2 prose-ul:my-4
                prose-a:text-[#e4b2b3] prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            {/* Author Box */}
            <div className="mt-12 pt-8 border-t border-[#2a2a35]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#e4b2b3]/20 flex items-center justify-center text-[#e4b2b3] text-xl font-bold">
                  {selectedPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-white font-medium">{selectedPost.author}</p>
                  <p className="text-gray-500 text-sm">{selectedPost.authorRole} at Zyotra</p>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-6">More from the Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="text-left p-4 rounded-xl bg-[#1e1e26] border border-[#2a2a35] hover:border-[#e4b2b3]/30 transition-colors"
                >
                  <span className="text-xs text-[#e4b2b3] font-medium">{post.category}</span>
                  <h4 className="text-white font-medium mt-2 line-clamp-2">{post.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{post.readTime}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a22] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e4b2b3]/10 border border-[#e4b2b3]/20 mb-6">
            <span className="text-[#e4b2b3] text-sm font-medium">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Latest from <span className="text-[#e4b2b3]">Zyotra</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Product updates, tutorials, and insights on server deployment and database management.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-[#e4b2b3] text-[#1a1a22]'
                  : 'text-gray-400 hover:text-white hover:bg-[#2a2a35]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <button
            onClick={() => setSelectedPost(featuredPost)}
            className="w-full mb-12 group text-left"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1e1e26] to-[#22222a] border border-[#2a2a35] overflow-hidden hover:border-[#e4b2b3]/30 transition-all">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e4b2b3]/5 to-transparent"></div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#e4b2b3]/20 text-[#e4b2b3] text-xs font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#2a2a35] text-gray-400 text-xs font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#e4b2b3] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 text-lg mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e4b2b3]/20 flex items-center justify-center text-[#e4b2b3] font-bold">
                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-medium">{featuredPost.author}</p>
                    <p className="text-gray-500 text-sm">{featuredPost.date} • {featuredPost.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.filter(p => !p.featured || activeCategory !== 'All').map(post => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="text-left group"
            >
              <article className="h-full rounded-xl bg-[#1e1e26] border border-[#2a2a35] overflow-hidden hover:border-[#e4b2b3]/30 transition-all">
                {/* Gradient Top */}
                <div className="h-2 bg-gradient-to-r from-[#e4b2b3]/50 to-[#e4b2b3]/10"></div>
                
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full bg-[#2a2a35] text-gray-400 text-xs font-medium">
                    {post.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-white mt-4 mb-3 group-hover:text-[#e4b2b3] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{post.author}</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#1e1e26] to-[#22222a] border border-[#2a2a35]">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest tutorials and product updates delivered to your inbox.</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-[#1a1a22] border border-[#2a2a35] text-white placeholder:text-gray-600 focus:border-[#e4b2b3]/50 focus:outline-none"
              />
              <button className="px-6 py-3 rounded-lg bg-[#e4b2b3] text-white font-medium hover:bg-[#d4a2a3] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#2a2a35] text-gray-400 hover:text-white hover:border-[#e4b2b3]/50 transition-colors"
          >
            View Documentation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
