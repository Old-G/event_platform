import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/' className='w-[50px] md:w-[65px]'>
          <Image
            src='/assets/images/evently_logo.png'
            width={128}
            height={38}
            alt='logo'
            className='rounded-2xl'
          />
        </Link>

        <p>2023 evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
