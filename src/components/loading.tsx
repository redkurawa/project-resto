import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';

type LoadingProps = {
  loading?: boolean;
};

export const Loading = ({ loading = false }: LoadingProps) => {
  return (
    <div>
      <Dialog open={loading}>
        <DialogContent className='flex items-center text-center'>
          <Loader2 className='text-muted-foreground size-20 animate-spin' />
          <div className='text-left'>
            <div className='text-lg font-semibold'>
              Loading data restoran...
            </div>
            <div className='text-lg font-semibold'>Please wait</div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
