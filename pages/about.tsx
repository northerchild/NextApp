import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'


export default function about() {
  return (
    <>
        <h1 className='title'>
            Ir a <Link href="/">Home</Link>
          </h1>

          <p className='description'>
            Get started by editing{' '}
            <code className='code'>pages/about.js</code>
          </p>
    </>
  )
}


about.getLayout = function getLayout(page){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}