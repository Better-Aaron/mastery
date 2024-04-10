import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { CommandDemo } from '../_components/command';

export default function Home() {
  return (
    <div>
      <Button variant="outline">
        <Loader2 className=" mr-2 h-4 w-4 animate-spin" />
      </Button>
    </div>
  );
}
