import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      {/* 네비게이션 바 */}
      <nav className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='text-2xl font-bold text-dark'>moonli</div>
          <div className='flex gap-6'>
            <a href='#networks' className='text-dark hover:text-neon transition-colors'>
              Networks
            </a>
            <a href='#reliability' className='text-dark hover:text-neon transition-colors'>
              Reliability
            </a>
            <a href='#giving' className='text-dark hover:text-neon transition-colors'>
              Giving Back
            </a>
            <a href='#touch' className='text-dark hover:text-neon transition-colors'>
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className='pt-32 pb-20'>
        <div className='container mx-auto px-4'>
          <div className='bg-neon rounded-3xl p-12 relative overflow-hidden'>
            <div className='max-w-2xl relative z-10'>
              <h1 className='text-5xl font-bold text-dark mb-6'>
                We are an independent staking service provider for blockchain projects
              </h1>
              <p className='text-lg text-dark/80'>
                Independent means that it is not by blockchain guide for blockchain and crypto
                enthusiasts just like you. We try for institutional support. We indeed care about
                keeping the stake decentralized.
              </p>
            </div>
            {/* 장식용 아이콘들 */}
            <div className='absolute right-0 top-1/2 -translate-y-1/2'>
              {/* 여기에 SVG 아이콘들이 들어갈 수 있습니다 */}
            </div>
          </div>
        </div>
      </section>

      {/* 네트워크 섹션 */}
      <section id='networks' className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-dark mb-12'>Networks</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow'>
              <h3 className='text-2xl font-bold mb-4'>Celo Protocol</h3>
              {/* 네트워크 내용 */}
            </div>
            <div className='bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow'>
              <h3 className='text-2xl font-bold mb-4'>The Graph</h3>
              {/* 네트워크 내용 */}
            </div>
            <div className='bg-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow'>
              <h3 className='text-2xl font-bold mb-4'>Moo</h3>
              {/* 네트워크 내용 */}
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰성 섹션 */}
      <section id='reliability' className='py-20 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-dark mb-12'>Reliability</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='bg-white rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-4'>Infrastructure</h3>
              <p className='text-gray-600'>
                We locate our infrastructure in various data centers across Europe to ensure
                redundancy and high uptime.
              </p>
            </div>
            <div className='bg-white rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-4'>Monitoring</h3>
              <p className='text-gray-600'>
                We use various monitoring and alerting tools to monitor the infrastructure and
                respond to any issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back 섹션 */}
      <section id='giving' className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='bg-neon rounded-3xl p-12'>
            <h2 className='text-4xl font-bold text-dark mb-6'>Giving back</h2>
            <p className='text-lg text-dark/80 max-w-2xl'>
              We regularly donate a portion of our profits to various charities, NGOs, independent
              mass media and charitable campaigns
            </p>
            <div className='mt-8 grid grid-cols-3 md:grid-cols-6 gap-4'>
              {/* 여기에 자선단체 로고들이 들어갈 수 있습니다 */}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch 섹션 */}
      <section id='touch' className='py-20 bg-gray-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold text-dark mb-12'>Get in touch</h2>
          <div className='flex justify-center gap-6'>
            <a href='#' className='text-dark hover:text-neon transition-colors'>
              <FaTwitter size={24} />
            </a>
            <a href='#' className='text-dark hover:text-neon transition-colors'>
              <FaGithub size={24} />
            </a>
            <a href='#' className='text-dark hover:text-neon transition-colors'>
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className='bg-dark text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>moonli</div>
            <div className='text-sm'>© 2024. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
