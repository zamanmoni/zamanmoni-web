import React, { useState } from 'react';
import { Sun, Moon, Globe, Play, Sparkles, Smartphone, ShieldCheck, TrendingUp, Video, ExternalLink, Mail, Send, CheckCircle2, ArrowUpRight, Menu, X, Youtube, Instagram, Facebook, Layers, Cpu, UserCheck, Share2 } from 'lucide-react';

const DATA = {
  en: {
    nav: ['About', 'Expertise', 'Content', 'Tools', 'Connect'],
    badge: 'Digital Creator • Tech & AI Educator',
    greeting: "Hi, I'm",
    name: 'Moniruzzaman Moni',
    tagline: 'Simplifying Tech, Mastering AI, and Crafting Authentic Lifestyle Stories.',
    desc: 'Helping thousands navigate smartphone optimization, emerging AI workflows, social media growth, and everyday digital productivity with practical content.',
    cta1: 'Explore Latest Videos',
    cta2: 'Work With Me',
    stats: [['4+', 'Core Niches'], ['150+', 'Tech & AI Guides'], ['Growing', 'Community Reach']],
    aboutTag: 'THE CREATOR BEHIND THE SCREEN',
    aboutTitle: 'Bridging Complex Technology with Everyday Simplicity',
    aboutP1: 'From uncovering hidden Android & iOS productivity tricks to breaking down the newest AI tools, my mission is to make modern technology accessible for everyone.',
    aboutP2: 'Beyond screens and algorithms, I share real moments from daily life, storytelling, and creative experiments across YouTube and Facebook.',
    highlights: [
      ['Practical Tutorials', 'Zero fluff—step-by-step actionable tech & mobile tips.'],
      ['AI-First Mindset', 'Curating safe, high-impact AI tools for creators & professionals.'],
      ['Authentic Storytelling', 'Relatable daily vlogs and real-world digital experiences.']
    ],
    nicheTag: 'CONTENT PILLARS',
    nicheTitle: 'What I Create & Share',
    nicheSub: 'Focused on high-value digital education and engaging visual storytelling.',
    niches: [
      ['tech', 'Tech & Mobile Mastery', 'Deep-dive Android & iOS settings, battery & speed optimization, privacy protection, and hidden smartphone features.', 'Tutorials'],
      ['ai', 'AI Tools & Future Tech', 'Hands-on reviews of generative AI apps, smart prompts, voice/video AI workflows, and digital safety.', 'AI Workflows'],
      ['social', 'Social Media & Creator Growth', 'Actionable strategies for Facebook & YouTube creators—reach optimization and monetization.', 'Creator Economy'],
      ['lifestyle', 'Daily Vlogs & Lifestyle', 'Behind-the-scenes creator life, family moments, travel snippets, and honest reflections from Bangladesh.', 'Vlogs & Stories']
    ],
    vidTag: 'FEATURED SHOWCASE',
    vidTitle: 'Popular Content & Playlists',
    vidSub: 'Filter by topic to explore tutorials, AI breakdowns, and vlogs.',
    tabs: [['all', 'All'], ['tech', 'Tech Tips'], ['ai', 'AI Guides'], ['social', 'Social Growth'], ['lifestyle', 'Lifestyle']],
    watch: 'Watch on Channel',
    videos: [
      ['tech', 'YouTube & FB', '08:45', '7 Hidden Android Settings You Should Change Immediately for Speed & Privacy', 'Featured Guide', 'from-blue-600 to-cyan-500'],
      ['ai', 'YouTube', '11:20', 'Top Free AI Tools in 2026 That Save Hours of Daily Work on Your Phone', 'Trending AI', 'from-violet-600 to-fuchsia-500'],
      ['social', 'FB Reels & YT', '06:15', 'How to Fix Low Reach & Grow Your Page Organically Without Boosting', 'Creator Strategy', 'from-emerald-600 to-teal-500'],
      ['lifestyle', 'YouTube Vlog', '14:10', 'A Day in My Life: Filming Setup, Family Time & Behind the Scenes', 'Personal Vlog', 'from-amber-500 to-orange-600'],
      ['tech', 'Short Tutorial', '03:30', 'Stop Background Data Drain & Double Your Smartphone Battery Backup', 'Quick Fix', 'from-sky-600 to-indigo-500'],
      ['ai', 'YouTube', '09:50', 'How to Spot AI-Generated Media & Keep Your Personal Data Safe Online', 'AI Safety', 'from-rose-600 to-pink-500']
    ],
    toolTag: 'CREATOR TOOLKIT',
    toolTitle: 'Recommended Gear & AI Stack',
    tools: [
      ['Artificial Intelligence', 'AI Content & Prompt Studio', 'Used for script ideation, bilingual translation, and smart workflow automation.'],
      ['Video Production', 'Mobile Video Editing Suite', 'Fast timeline editing, color grading, and dynamic Bangla/English captions on mobile.'],
      ['Digital Safety', 'Privacy & Security Checklist', 'Two-factor authentication, metadata cleaner, and permission audit tools for creators.']
    ],
    socTag: 'JOIN THE COMMUNITY',
    socTitle: 'Follow Across Social Platforms',
    socials: [
      ['Facebook', 'Moniruzzaman Moni', 'Daily tech reels, social media tips, and community posts.', 'https://www.facebook.com/share/1CZ5ZPiLYm/', 'Follow on Facebook', 'Primary Hub'],
      ['Instagram', '@mzaman.moni', 'Behind-the-scenes stories, lifestyle snapshots, and quick reels.', 'https://www.instagram.com/mzaman.moni', 'Follow on Instagram', 'Lifestyle & Reels'],
      ['YouTube', '@moniruzzaman.ru', 'In-depth tutorials, AI guides, and full-length vlogs.', 'https://www.youtube.com', 'Subscribe on YouTube', 'Long-Form Videos']
    ],
    conTag: 'COLLABORATIONS & INQUIRIES',
    conTitle: "Let's Create Something Impactful Together",
    conSub: 'Open for brand sponsorships, tech/AI app reviews, digital campaigns, and collaborations.',
    form: { name: 'Your Name', email: 'Email Address', topic: 'Inquiry Type', topics: ['Brand Sponsorship / Review', 'Content Collaboration', 'Tech / Social Consultation', 'General Message'], msg: 'Message', btn: 'Send Message', sent: 'Message Received!', sentSub: 'Thank you for reaching out. I will get back to you soon.', reset: 'Send Another' },
    rights: '© 2026 Moniruzzaman Moni (zamanmoni.com). All rights reserved.'
  },
  bn: {
    nav: ['পরিচিতি', 'বিষয়বস্তু', 'ভিডিও', 'এআই ও টুলস', 'যোগাযোগ'],
    badge: 'ডিজিটাল ক্রিয়েটর • টেক ও এআই এডুকেটর',
    greeting: 'স্বাগতম, আমি',
    name: 'মনিরুজ্জামান মনি',
    tagline: 'সহজ ভাষায় টেকনোলজি, স্মার্ট এআই ব্যবহার এবং জীবনের গল্প।',
    desc: 'স্মার্টফোন অপ্টিমাইজেশন, আধুনিক AI টুলস, সোশ্যাল মিডিয়া গ্রোথ এবং দৈনন্দিন ডিজিটাল প্রোডাক্টিভিটি নিয়ে সহজ ও কার্যকর টিউটোরিয়াল তৈরি করছি।',
    cta1: 'সাম্প্রতিক ভিডিও দেখুন',
    cta2: 'কোলাবরেশন করুন',
    stats: [['৪+', 'মূল ক্যাটাগরি'], ['১৫০+', 'টেক ও এআই গাইড'], ['বর্ধনশীল', 'কমিউনিটি']],
    aboutTag: 'আমার সম্পর্কে',
    aboutTitle: 'জটিল টেকনোলজিকে সবার জন্য সহজ করে তোলাই আমার লক্ষ্য',
    aboutP1: 'অ্যান্ড্রয়েড ও আইফোনের গোপন সব প্রোডাক্টিভিটি টিপস থেকে শুরু করে আধুনিক AI টুলসের সঠিক ব্যবহার—সবকিছু সহজ ও প্রাঞ্জল ভাষায় তুলে ধরাই আমার কাজের উদ্দেশ্য।',
    aboutP2: 'প্রযুক্তির পাশাপাশি দৈনন্দিন জীবনের বাস্তব অভিজ্ঞতা, ভ্লগ এবং সৃজনশীল গল্প ইউটিউব ও ফেসবুকের মাধ্যমে শেয়ার করি।',
    highlights: [
      ['কার্যকর টিউটোরিয়াল', 'অপ্রয়োজনীয় কথা ছাড়াই ধাপে ধাপে প্র্যাকটিক্যাল টেক টিপস।'],
      ['স্মার্ট এআই গাইডলাইন', 'ক্রিয়েটর ও পেশাজীবীদের জন্য নিরাপদ ও সেরা AI টুলসের রিভিউ।'],
      ['বাস্তবধর্মী গল্প', 'দৈনন্দিন ভ্লগ এবং জীবনের ইতিবাচক অভিজ্ঞতার শেয়ারিং।']
    ],
    nicheTag: 'কন্টেন্ট ক্যাটাগরি',
    nicheTitle: 'যে বিষয়গুলো নিয়ে কাজ করি',
    nicheSub: 'মানসম্মত ডিজিটাল শিক্ষা এবং আকর্ষণীয় ভিজ্যুয়াল কন্টেন্টের সমন্বয়।',
    niches: [
      ['tech', 'টেক ও স্মার্টফোন টিপস', 'অ্যান্ড্রয়েড ও আইওএস সেটিংস, ব্যাটারি ও স্পিড অপ্টিমাইজেশন এবং লুকানো ফিচারের বিস্তারিত গাইড।', 'টিউটোরিয়াল'],
      ['ai', 'এআই টুলস ও ফিউচার টেক', 'নতুন জেনারেটিভ AI অ্যাপ, স্মার্ট প্রম্পট, ভয়েস ও ভিডিও এআই ওয়ার্কফ্লো এবং অনলাইন নিরাপত্তা।', 'এআই গাইড'],
      ['social', 'সোশ্যাল মিডিয়া গ্রোথ', 'ফেসবুক ও ইউটিউব ক্রিয়েটরদের জন্য অ্যালগরিদম টিপস, রিচ বাড়ানোর কৌশল এবং মনিটাইজেশন।', 'ক্রিয়েটর টিপস'],
      ['lifestyle', 'ডেইলি ভ্লগ ও লাইফস্টাইল', 'কন্টেন্ট তৈরির পেছনের গল্প, পারিবারিক সময়, ভ্রমণ এবং বাংলাদেশের দৈনন্দিন জীবনযাত্রার খণ্ডচিত্র।', 'ভ্লগ ও গল্প']
    ],
    vidTag: 'নির্বাচিত কন্টেন্ট',
    vidTitle: 'জনপ্রিয় ভিডিও ও প্লেলিস্ট',
    vidSub: 'আপনার পছন্দের বিষয় অনুযায়ী টিউটোরিয়াল, এআই গাইড এবং ভ্লগ দেখুন।',
    tabs: [['all', 'সব'], ['tech', 'টেক টিপস'], ['ai', 'এআই গাইড'], ['social', 'সোশ্যাল গ্রোথ'], ['lifestyle', 'লাইফস্টাইল']],
    watch: 'চ্যানেলে দেখুন',
    videos: [
      ['tech', 'YouTube & FB', '০৮:৪৫', 'ফোনের স্পিড ও প্রাইভেসি বাড়াতে এখনই ৭টি গোপন Android সেটিংস পরিবর্তন করুন', 'স্পেশাল গাইড', 'from-blue-600 to-cyan-500'],
      ['ai', 'YouTube', '১১:২০', '২০২৬ সালের সেরা ফ্রি AI টুলস যা আপনার প্রতিদিনের কাজ অর্ধেক কমিয়ে দেবে', 'ট্রেন্ডিং এআই', 'from-violet-600 to-fuchsia-500'],
      ['social', 'FB Reels & YT', '০৬:১৫', 'বুস্ট ছাড়াই অর্গানিকভাবে ফেসবুক পেজের রিচ ও ফলোয়ার বাড়ানোর সঠিক উপায়', 'ক্রিয়েটর টিপস', 'from-emerald-600 to-teal-500'],
      ['lifestyle', 'YouTube Vlog', '১৪:১০', 'আমার সারাদিনের ব্যস্ততা: ভিডিও শুটিং সেটআপ ও বিহাইন্ড দ্য সিনস', 'পার্সোনাল ভ্লগ', 'from-amber-500 to-orange-600'],
      ['tech', 'Short Tutorial', '০৩:৩০', 'ব্যাকগ্রাউন্ড ডাটা খরচ বন্ধ করুন এবং ফোনের ব্যাটারি ব্যাকআপ দ্বিগুণ করুন', 'কুইক টিপস', 'from-sky-600 to-indigo-500'],
      ['ai', 'YouTube', '০৯:৫০', 'এআই দিয়ে তৈরি ভুয়া ছবি বা ভিডিও চেনার উপায় ও অনলাইনে নিরাপদ থাকার কৌশল', 'এআই সেফটি', 'from-rose-600 to-pink-500']
    ],
    toolTag: 'ক্রিয়েটর টুলকিট',
    toolTitle: 'আমার ব্যবহৃত সেরা টুলস ও রিসোর্স',
    tools: [
      ['আর্টিফিশিয়াল ইন্টেলিজেন্স', 'এআই কন্টেন্ট ও প্রম্পট স্টুডিও', 'ভিডিও স্ক্রিপ্ট আইডিয়া, অনুবাদ এবং স্মার্ট ওয়ার্কফ্লো অটোমেশনের জন্য ব্যবহৃত।'],
      ['ভিডিও প্রোডাকশন', 'মোবাইল ভিডিও এডিটিং স্যুট', 'মোবাইলেই নিখুঁত কালার গ্রেডিং, সাউন্ড ডিজাইন এবং বাংলা-ইংরেজি ক্যাপশন তৈরির জন্য।'],
      ['ডিজিটাল নিরাপত্তা', 'প্রাইভেসি ও সিকিউরিটি চেকলিস্ট', 'টু-ফ্যাক্টর অথেনটিকেশন, মেটাডাটা রিমুভার এবং অ্যাকাউন্ট সুরক্ষার প্রয়োজনীয় টুলস।']
    ],
    socTag: 'কমিউনিটিতে যুক্ত হোন',
    socTitle: 'সোশ্যাল মিডিয়ায় আমাকে ফলো করুন',
    socials: [
      ['Facebook', 'Moniruzzaman Moni', 'প্রতিদিনের টেক রিলস, সোশ্যাল মিডিয়া টিপস এবং কমিউনিটি পোস্ট।', 'https://www.facebook.com/share/1CZ5ZPiLYm/', 'ফেসবুকে ফলো করুন', 'মূল প্ল্যাটফর্ম'],
      ['Instagram', '@mzaman.moni', 'বিহাইন্ড দ্য সিনস স্টোরি, লাইফস্টাইল মুহূর্ত এবং কুইক রিলস।', 'https://www.instagram.com/mzaman.moni', 'ইনস্টাগ্রামে ফলো করুন', 'লাইফস্টাইল ও রিলস'],
      ['YouTube', '@moniruzzaman.ru', 'বিস্তারিত টিউটোরিয়াল, এআই গাইড এবং ফুল-লেন্থ ভ্লগ ভিডিও।', 'https://www.youtube.com', 'ইউটিউবে সাবস্ক্রাইব করুন', 'বিস্তারিত ভিডিও']
    ],
    conTag: 'স্পন্সরশিপ ও যোগাযোগ',
    conTitle: 'একসাথে নতুন কিছু তৈরি করা যাক',
    conSub: 'ব্র্যান্ড স্পন্সরশিপ, টেক বা AI অ্যাপ রিভিউ এবং কোলাবরেশনের জন্য মেসেজ পাঠান।',
    form: { name: 'আপনার নাম', email: 'ইমেইল অ্যাড্রেস', topic: 'বিষয় নির্বাচন করুন', topics: ['ব্র্যান্ড স্পন্সরশিপ / রিভিউ', 'কন্টেন্ট কোলাবরেশন', 'টেক / সোশ্যাল পরামর্শ', 'সাধারণ বার্তা'], msg: 'আপনার বার্তা', btn: 'বার্তা পাঠান', sent: 'বার্তা পাঠানো হয়েছে!', sentSub: 'যোগাযোগ করার জন্য ধন্যবাদ। শীঘ্রই উত্তর দেব।', reset: 'আরেকটি বার্তা পাঠান' },
    rights: '© ২০২৬ মনিরুজ্জামান মনি (zamanmoni.com)। সর্বস্বত্ব সংরক্ষিত।'
  }
};

export default function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState('en');
  const [tab, setTab] = useState('all');
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const t = DATA[lang];
  const vids = tab === 'all' ? t.videos : t.videos.filter((v) => v[0] === tab);
  const ids = ['#about', '#niches', '#videos', '#tools', '#contact'];

  const iconNiche = (id) => {
    if (id === 'tech') return <Smartphone className="w-6 h-6 text-sky-400" />;
    if (id === 'ai') return <Sparkles className="w-6 h-6 text-violet-400" />;
    if (id === 'social') return <TrendingUp className="w-6 h-6 text-emerald-400" />;
    return <Video className="w-6 h-6 text-amber-400" />;
  };

  const iconSoc = (name) => {
    if (name === 'Facebook') return <Facebook className="w-6 h-6 text-blue-500" />;
    if (name === 'Instagram') return <Instagram className="w-6 h-6 text-pink-500" />;
    return <Youtube className="w-6 h-6 text-red-500" />;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${dark ? 'bg-slate-950/85 border-slate-800' : 'bg-white/85 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-sky-500 to-violet-600 p-0.5 shadow-lg">
            {!imgErr ? (
              <img src="/Moniruzzaman.png" alt="Moniruzzaman Moni" onError={() => setImgErr(true)} className="w-full h-full object-cover object-top rounded-[10px]" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-bold">ZM</div>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {t.nav.map((n, i) => (
              <a key={i} href={ids[i]} className="hover:text-sky-500 transition-colors">{n}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer ${dark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'}`}>
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>
            <button onClick={() => setDark(!dark)} className={`p-2 rounded-full border cursor-pointer ${dark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-700'}`}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setMenu(!menu)} className={`md:hidden p-2 rounded-lg border ${dark ? 'border-slate-800' : 'border-slate-200'}`}>
              {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menu && (
          <div className={`md:hidden px-4 py-3 border-b space-y-2 text-sm font-medium ${dark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            {t.nav.map((n, i) => (
              <a key={i} href={ids[i]} onClick={() => setMenu(false)} className="block py-1 hover:text-sky-500">{n}</a>
            ))}
          </div>
        )}
      </header>

      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-sky-500/20 to-violet-600/20 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-7 space-y-5">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${dark ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' : 'bg-sky-50 border-sky-200 text-sky-700'}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <div>
              <p className={`text-base font-medium ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{t.greeting}</p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent pb-1">{t.name}</h1>
              <p className="text-xl sm:text-2xl font-semibold pt-2">{t.tagline}</p>
            </div>
            <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{t.desc}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#videos" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/25">
                <Play className="w-4 h-4 fill-current" /> {t.cta1}
              </a>
              <a href="#contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border ${dark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'}`}>
                {t.cta2} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className={`grid grid-cols-3 gap-4 pt-5 border-t ${dark ? 'border-slate-800' : 'border-slate-200'}`}>
              {t.stats.map(([val, lbl], i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-extrabold text-sky-500">{val}</div>
                  <div className={`text-xs sm:text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`rounded-3xl p-6 border shadow-2xl ${dark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800/40">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500 to-violet-600 p-0.5 shrink-0">
                  {!imgErr ? (
                    <img src="/Moniruzzaman.png" alt="Moniruzzaman Moni" onError={() => setImgErr(true)} className="w-full h-full object-cover object-top rounded-[14px]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl">MM</div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-bold text-lg">Moniruzzaman Moni</h2>
                    <UserCheck className="w-4 h-4 text-sky-500" />
                  </div>
                  <p className="text-xs text-sky-500 font-medium">@moniruzzaman.ru</p>
                  <span className="inline-block mt-2 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">● Active Creator</span>
                </div>
              </div>
              <div className="py-4 space-y-2.5 text-sm">
                <div className={`flex items-center justify-between p-3 rounded-xl ${dark ? 'bg-slate-950/70' : 'bg-slate-50'}`}>
                  <span className="flex items-center gap-2.5 font-medium"><Smartphone className="w-4 h-4 text-sky-500" /> Android & iOS Productivity</span>
                  <span className="text-xs font-semibold text-sky-500">Tech</span>
                </div>
                <div className={`flex items-center justify-between p-3 rounded-xl ${dark ? 'bg-slate-950/70' : 'bg-slate-50'}`}>
                  <span className="flex items-center gap-2.5 font-medium"><Cpu className="w-4 h-4 text-violet-500" /> Generative AI & Safety</span>
                  <span className="text-xs font-semibold text-violet-500">AI</span>
                </div>
                <div className={`flex items-center justify-between p-3 rounded-xl ${dark ? 'bg-slate-950/70' : 'bg-slate-50'}`}>
                  <span className="flex items-center gap-2.5 font-medium"><Share2 className="w-4 h-4 text-emerald-500" /> Social Media & Vlogs</span>
                  <span className="text-xs font-semibold text-emerald-500">Creator</span>
                </div>
              </div>
              <div className="pt-2 flex gap-2">
                <a href="https://www.facebook.com/share/1CZ5ZPiLYm/" target="_blank" rel="noreferrer" className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border ${dark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                  <Facebook className="w-4 h-4 text-blue-500" /> Facebook
                </a>
                <a href="https://www.instagram.com/mzaman.moni" target="_blank" rel="noreferrer" className={`flex-1 py-2.5 rounded-
