import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AddressCommand } from '../address-command/address-command'
import { ModeToggle } from '../toggle-mode-button/toggle-button'

export const Header = () => {
  return (
    <div className="flex h-20 px-[2.5rem] py-2 border-b-gray-100 w-full justify-between dark:bg-slate-950 bg-white  border-b-[1px] items-center dark:border-b-gray-900 max-w-full ">
        <span className='font-semibold cursor-pointer'>
          highlander
          <span className='text-orange-300'>.</span>
        </span>
        <AddressCommand />
        <div className='flex items-center gap-5'>
          <Link href='/create-announcement'>
            <Button className='text-sm  text-gray-400' variant={"ghost"} >
              Anuncie seu espaço
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
  )
  }
