import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import { Callout } from '@/components/callout';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

interface MdxProps {
  code: string;
}

export const MDXContent = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return <Component component={components} />;
};
