import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

// Existing DropDownUserMenu component
export function DropDownUserMenu() {
  return (
    <DropdownMenuContent className='w-56'>
      <DropdownMenuLabel>John Doe</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <span className='flex items-center gap-2'>📍 Delivery Address</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span className='flex items-center gap-2'>📦 My Orders</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span className='flex items-center gap-2 text-red-500'>⏻ Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}

// New DropDownItemDetails component for "Check Detail Barang"
export function DropDownItemDetails() {
  return (
    <DropdownMenuContent className='w-56'>
      <DropdownMenuLabel>Item Details</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <span className='flex items-center gap-2'>🔍 View Specifications</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span className='flex items-center gap-2'>📏 Check Dimensions</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span className='flex items-center gap-2'>⭐ View Reviews</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
