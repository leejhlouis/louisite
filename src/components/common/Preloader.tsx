import { BallTriangle } from 'react-loader-spinner'

export default function Preloader(): JSX.Element {
  return (
    <div className='flex h-screen items-center justify-center'>
      <BallTriangle wrapperClass='preloader' />
    </div>
  )
}
