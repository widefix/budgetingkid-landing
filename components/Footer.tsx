import Image from 'next/image';
import logoImg from '/public/logo.svg';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicSubscribe = dynamic(() => import('./Subscribe'), {
  ssr: false,
});

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className={'mb-7'}>
        <Link href={'/'}>
          <Image src={logoImg} alt={'Budgetkid logo'} />
        </Link>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="grid grid-cols-3 gap-6">
          <dl>
            <dt>About Us</dt>
            <dd>
              <Link href={'/'}>Company</Link>
            </dd>
            <dd>
              <Link href={'/'}>Careers</Link>
            </dd>
            <dd>
              <Link href={'/'}>Why Us?</Link>
            </dd>
          </dl>
          <dl>
            <dt>Platform</dt>
            <dd>
              <Link href={'/'}>Success Stories</Link>
            </dd>
          </dl>
          <dl>
            <dt>Resources</dt>
            <dd>
              <Link href={'https://blog.budgetingkid.com/'} target="_blank">
                Blogs
              </Link>
            </dd>
            <dd>
              <Link href={'https://help.budgetingkid.com/'} target="_blank">
                Help Center
              </Link>
            </dd>
          </dl>
        </div>
        <DynamicSubscribe />
      </div>
      <div className={'h-px bg-[#DBD2E3] my-16'}></div>
      <div className="lg:flex">
        <ul className="flex gap-3 text-sm">
          <li className={'text-text-primary-light'}>
            © {new Date().getFullYear()}{' '}
            <Link target="_blank" href={'https://widefix.com'}>
              WideFix
            </Link>
          </li>
          <li>
            <Link
              className={'text-text-button-secondary hover:underline font-bold'}
              prefetch={false}
              href={'https://budgetingkid.com/policy#cookies'}
            >
              Cookie Settings
            </Link>
          </li>
          <li>
            <Link
              className={'text-text-button-secondary hover:underline font-bold'}
              prefetch={false}
              href={'https://budgetingkid.com/policy'}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className={'text-text-button-secondary hover:underline font-bold'}
              prefetch={false}
              href={'https://budgetingkid.com/policy#terms'}
            >
              Terms of Service
            </Link>
          </li>
        </ul>
        <ul className="flex gap-4 ml-auto mt-4 lg:mt-0">
          <li>
            <Link
              prefetch={false}
              target="_blank"
              href={'https://www.facebook.com/profile.php?id=61553468415163'}
              aria-label={'Facebook'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                fill="none"
                viewBox="0 0 20 21"
              >
                <g clipPath="url(#clip0_2396_84)">
                  <path
                    fill="#333645"
                    fillRule="evenodd"
                    d="M8.547 3.87a5 5 0 013.536-1.465h2.5c.46 0 .833.373.833.833v3.333c0 .46-.373.834-.833.834h-2.5v.833h2.5a.833.833 0 01.809 1.036l-.834 3.333a.833.833 0 01-.808.631h-1.667v5c0 .46-.373.834-.833.834H7.916a.833.833 0 01-.833-.834v-5H5.416a.833.833 0 01-.833-.833V9.07c0-.46.373-.833.833-.833h1.667v-.833a5 5 0 011.464-3.536zm3.536.201A3.333 3.333 0 008.75 7.405V9.07c0 .46-.373.834-.834.834H6.25v1.667h1.666c.46 0 .834.373.834.833v5h1.666v-5c0-.46.373-.833.834-.833h1.849l.417-1.667H11.25a.833.833 0 01-.834-.834V7.405a1.667 1.667 0 011.667-1.667h1.667V4.071h-1.667z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2396_84">
                    <path
                      fill="#fff"
                      d="M0 0H20V20H0z"
                      transform="translate(0 .738)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              target="_blank"
              href={'https://twitter.com/ka8725'}
              aria-label={'Twitter'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                fill="none"
                viewBox="0 0 20 21"
              >
                <path
                  fill="#333645"
                  fillRule="evenodd"
                  d="M16.068 3.972l.21-.058c.601-.165 1.115-.305 1.659-.568a.833.833 0 011.23.733c0 .077-.01.152-.03.224-.161.626-.584 1.486-.916 2.136-.085.168-.164.32-.236.46l-.222.434a7.547 7.547 0 00-.111.228 12.366 12.366 0 01-.444 3.211l-.002.004c-1.023 3.642-3.7 6.084-6.945 7.027-2.864.83-6.096.246-8.993-1.333a.833.833 0 01.431-1.564c1.172.045 2.213-.25 3.258-.786-1.082-.668-1.859-1.447-2.392-2.29-.735-1.16-.966-2.38-.955-3.465.01-1.079.26-2.04.5-2.722a8.912 8.912 0 01.446-1.05 4.2 4.2 0 01.034-.067l.011-.02.004-.006.001-.002c0-.001.001-.002.727.407l-.726-.409a.833.833 0 011.404-.076c1.238 1.73 3.068 2.788 5.155 2.962-.01-1.754 1.095-3.261 2.725-3.872 1.354-.507 2.956-.565 4.177.462zM3.584 6.493c-.163.53-.3 1.186-.308 1.889-.008.835.168 1.722.697 2.558.528.834 1.447 1.679 3.027 2.368a.833.833 0 01.129 1.457c-.793.528-1.611.99-2.488 1.315 1.795.525 3.575.58 5.155.122M3.584 6.493C5.262 8.195 7.53 9.135 10.02 9.071a.833.833 0 00.812-.833v-.845c-.014-1.026.622-1.94 1.643-2.322 1.158-.434 2.12-.307 2.734.387.214.242.55.338.86.246.173-.051.355-.1.545-.153l.218-.06a32.83 32.83 0 01-.097.192c-.073.145-.15.294-.224.436l-.238.465c-.062.124-.12.243-.165.344a2.115 2.115 0 00-.067.17c-.012.035-.058.169-.057.33.005.98-.124 1.955-.384 2.9-.859 3.055-3.084 5.084-5.805 5.874"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              target="_blank"
              href={'https://pl.linkedin.com/company/widefix'}
              aria-label={'LinkedIn'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                fill="none"
                viewBox="0 0 20 21"
              >
                <g clipPath="url(#clip0_2396_95)">
                  <path
                    fill="#333645"
                    fillRule="evenodd"
                    d="M5 4.905a.833.833 0 00-.833.833v10c0 .46.373.834.833.834h10c.46 0 .833-.373.833-.834v-10A.833.833 0 0015 4.905H5zm-2.5.833a2.5 2.5 0 012.5-2.5h10a2.5 2.5 0 012.5 2.5v10a2.5 2.5 0 01-2.5 2.5H5a2.5 2.5 0 01-2.5-2.5v-10zm4.167.834c.46 0 .833.373.833.833v.008a.833.833 0 01-1.667 0v-.008c0-.46.373-.833.834-.833zm0 2.5c.46 0 .833.373.833.833v4.167a.833.833 0 11-1.667 0V9.905c0-.46.373-.833.834-.833zm2.5 5a.833.833 0 101.666 0v-2.5a.833.833 0 111.667 0v2.5a.833.833 0 101.667 0v-2.5a2.5 2.5 0 00-3.578-2.256.833.833 0 00-1.423.59v4.166z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2396_95">
                    <path
                      fill="#fff"
                      d="M0 0H20V20H0z"
                      transform="translate(0 .738)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
