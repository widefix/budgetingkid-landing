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
      className="rounded-2xl bg-white p-4 w-full flex flex-col xl:flex-row items-center"
    >
      <div className={'mr-18'}>
        <Image src={logoImg} alt={'Budgetkid logo'} />
      </div>
      <ul className={'flex flex-col xl:flex-row xl:gap-16 xl:ml-[72px]'}>
        <li>
          <Link className={HEADER_LINK_CLASSES} href="">
            How it works
          </Link>
        </li>
        <li>
          <Link className={HEADER_LINK_CLASSES} href="">
            FAQs
          </Link>
        </li>
        <li>
          <Link className={HEADER_LINK_CLASSES} href="">
            About
          </Link>
        </li>
      </ul>
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
