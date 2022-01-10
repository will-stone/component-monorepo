import { Button } from './button'
import Nested from './nested'

const ComponentA = ({ children }) => (
  <div>
    <Button />
    {children}
    <Nested />
  </div>
)

export default ComponentA
