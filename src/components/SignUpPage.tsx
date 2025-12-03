import { useState } from 'react';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex">
      {/* Left Side - Sign Up Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <a href="/" className="text-[#f5a623] font-bold text-2xl tracking-wider">
            ZYOTRA
          </a>
        </div>

        {/* Sign Up Form */}
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-serif italic text-white text-center mb-2">
            Sign up for Zyotra
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Start your 14-day free trial (no card required)
          </p>

          {/* Social Sign Up Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-100 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-100 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#00A4EF"
                  d="M11.4 24H0V12.6h11.4V24z"
                />
                <path
                  fill="#FFB900"
                  d="M24 24H12.6V12.6H24V24z"
                />
                <path
                  fill="#F25022"
                  d="M11.4 11.4H0V0h11.4v11.4z"
                />
                <path
                  fill="#7FBA00"
                  d="M24 11.4H12.6V0H24v11.4z"
                />
              </svg>
              Continue with Microsoft
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm">or continue with email</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                First and last name <span className="text-gray-600">(required)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Work email <span className="text-gray-600">(required)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@work-email.com"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={!name || !email}
              className="w-full bg-gray-700 text-gray-400 py-3 px-4 rounded-md font-medium transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 hover:text-white"
            >
              Continue
            </button>
          </form>

          {/* Returning User */}
          <p className="text-center mt-8 text-gray-400">
            Returning user?{' '}
            <a href="#" className="text-white underline hover:no-underline">
              Log in
            </a>
          </p>

          {/* Terms */}
          <p className="text-center mt-6 text-gray-500 text-sm">
            By signing up, you agree to our{' '}
            <a href="#" className="text-gray-400 underline hover:no-underline">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-gray-400 underline hover:no-underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Side - Trusted By Section */}
      <div className="flex-1 flex items-center justify-center border-l border-gray-800 px-12">
        <div className="max-w-lg">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-gray-600">┌</span>
            <span className="text-gray-500 text-xs uppercase tracking-widest">
              Trusted by leading companies
            </span>
            <span className="text-gray-600">┐</span>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-4 gap-8">
            {/* Row 1 */}
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" className="text-[#FF4500]" fill="currentColor"/>
              </svg>
              <span className="font-bold">reddit</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center font-serif text-xs">
                N
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="font-bold">Brex</span>
            </div>
            <div className="text-gray-400 text-xs tracking-wider">
              ANTHROPIC
            </div>

            {/* Row 2 */}
            <div className="text-gray-400 font-serif italic">
              Hinge
            </div>
            <div className="text-gray-400 text-xs">
              <span className="font-light">SEAT</span>
              <span className="font-bold">GEEK</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-red-500">♥</span>
              <span className="font-bold text-sm">babylist</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="font-semibold text-sm">ClickUp</span>
            </div>

            {/* Row 3 */}
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-sm">algolia</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-sm">Fivetran</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-sm">loom</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-sm">AllTrails</span>
            </div>

            {/* Row 4 */}
            <div className="text-gray-400 text-sm">
              hightouch
            </div>
            <div className="text-gray-400 text-xs tracking-wider">
              MODERN TREASURY
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-sm">ramp</span>
            </div>
            <div className="text-gray-400 text-sm">
              sedgwick<span className="text-[#f5a623]">*</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
