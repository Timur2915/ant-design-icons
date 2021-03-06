// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutOutlinedSvg}></AntdIcon>;
};

LayoutOutlined.displayName = 'LayoutOutlined';
LayoutOutlined.inheritAttrs = false;
export default LayoutOutlined;