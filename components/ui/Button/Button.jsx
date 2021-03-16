import { Button as Btn } from '@windmill/react-ui'

const Button = props => {
  const classes = ['']
  switch (props.type) {
    case 'primary':
      classes.push('bg-primary')
      break;
    case 'secondary':
      classes.push('bg-secondary')
      break;  
    default:
      break;
  }
  return (
    <Btn className={classes}>
      { props.children }
    </Btn>
  )
}

export default Button