import Image from 'next/image';
import logoImg from '/public/logo.svg';
import Button from '@/components/Button';
import Link from 'next/link';

const HEADER_LINK_CLASSES =
  'text-center text-text-primary-light text-base font-semibold leading-normal hover:text-[#your-hover-color] hover:bg-[#your-hover-background-color] hover:underline';

export default function Header() {
  return (
    <header
      role={'banner'}
      className="rounded-2xl bg-white p-4 w-full flex flex-col md:flex-row md:items-center"
    >
      <div className={'md:mr-10 lg:mr-18'}>
        <Link href={'/'}>
          <Image src={logoImg} alt={'Budgetkid logo'} />
        </Link>
      </div>
      <nav role="navigation">
        <ul
          className={
            'flex gap-3 text-center md:text-left md:gap-16 lg:ml-[72px] my-3 md:my-0 items-center'
          }
        >
          <li className={'flex-1'}>
            <Link className={HEADER_LINK_CLASSES} href="">
              How it works
            </Link>
          </li>
          <li className={'flex-1'}>
            <Link className={HEADER_LINK_CLASSES} href="">
              FAQs
            </Link>
          </li>
          <li className={'flex-1'}>
            <Link className={HEADER_LINK_CLASSES} href="">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-4 ml-auto">
        <li>
          <Button as={Link} href={'/'}>
            Join
          </Button>
        </li>
        <li>
          <Button type={'outline'} as={Link} href={'/'}>
            Login
          </Button>
        </li>
      </ul>
    </header>
  );
}
