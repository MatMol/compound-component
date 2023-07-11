import { useState, Children, cloneElement, ReactNode, isValidElement, ReactElement  } from "react"

type ToggleProps = {
  children: ReactNode,
}

export type ToggleElement = {
  on: boolean,
  toggle: () => void,
}

export const Toggle = ({ children }: ToggleProps) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  
  const childs = Children.map(children, child => {
    if (child && isValidElement(child)) {
      if (child.type === 'string') {
        return child;
      }
      const newChild = cloneElement(child as ReactElement<Partial<ToggleElement>>, { on, toggle });
      return newChild;
    }
    return null;
  })!;

  return <>
  {childs}
  </>
};