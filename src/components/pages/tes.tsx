import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropDownUserMenu, DropDownItemDetails } from '../dropdown-profile';

export const TesLagi = () => {
  return (
    <div>
      {/* First Dropdown: User Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='m-10 cursor-pointer'>User Menu</div>
        </DropdownMenuTrigger>
        <DropDownUserMenu />
      </DropdownMenu>

      {/* Second Dropdown: Item Details */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='m-10 cursor-pointer'>Check Detail Barang</div>
        </DropdownMenuTrigger>
        <DropDownItemDetails />
      </DropdownMenu>
    </div>
  );
};
