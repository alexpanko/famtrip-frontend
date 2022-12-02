import Link from 'next/link'
import CarFinderPageLayout from '../../components/partials/CarFinderPageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import FormCheck from 'react-bootstrap/FormCheck'
import Card from 'react-bootstrap/Card'
import PricingPlan from '../../components/PricingPlan'

const PromotionPage = () => {

  return (
    <CarFinderPageLayout
      pageTitle='Ad Promotion'
      activeNav='Vendor'
      userLoggedIn
    >

      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='breadcrumb-light mb-3 pt-2 pt-lg-3'>
          <Link href='/car-finder' passHref>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Link>
          <Link href='/car-finder/sell-car' passHref>
            <Breadcrumb.Item>Sell car</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>Promotion page</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page title */}
        <h1 className='h2 mb-4 text-light'>Promotion page</h1>
        <h2 className='h3 pb-2 mb-4 text-light'>Select your perfect plan to promote your ad</h2>


        {/* Pricing plans */}
        <Row>
          <Col sm={6} md={4} className='mb-4'>
            <PricingPlan
              light
              image={{
                src: '/images/pricing/icon-1.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Easy Start'
              price='$5'
              period='month'
              options={[
                {title: '3x more views', available: true},
                {title: 'Top ads for 3 days', available: true},
                {title: 'Moving up the list', available: false},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'outline-light',
                props: {
                  onClick: () => console.log('You have chosen Easy Start plan')
                }
              }}
            />
          </Col>
          <Col sm={6} md={4} className='mb-4'>
            <PricingPlan
              light
              featured
              image={{
                src: '/images/pricing/icon-2.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Fast Sale'
              price='$15'
              period='month'
              options={[
                {title: '10x more views', available: true},
                {title: 'Top ads for 5 days', available: true},
                {title: 'Moving up the list', available: true},
                {title: 'Featured badge in the results', available: false}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'primary',
                props: {
                  onClick: () => console.log('You have chosen Fast Sale plan')
                }
              }}
            />
          </Col>
          <Col md={4} className='mb-4'>
            <PricingPlan
              light
              image={{
                src: '/images/pricing/icon-3.svg',
                width: '72',
                height: '88',
                alt: 'Icon'
              }}
              title='Turbo Boost'
              price='$25'
              period='month'
              options={[
                {title: '20x more views', available: true},
                {title: 'Top ads for 10 days', available: true},
                {title: 'Moving up the list', available: true},
                {title: 'Featured badge in the results', available: true}
              ]}
              button={{
                href: '#',
                title: 'Choose plan',
                variant: 'outline-light',
                props: {
                  onClick: () => console.log('You have chosen Turbo Boost plan')
                }
              }}
            />
          </Col>
        </Row>


        {/* Other services */}
        <h2 className='h3 pt-4 pt-md-5 mb-4 text-light'>Other services</h2>
        <Card className='card-light card-hover card-body px-4 mb-2'>
          <FormCheck id='ad-option-1' className='form-check-light'>
            <FormCheck.Input type='checkbox' defaultChecked />
            <FormCheck.Label className='d-sm-flex w-100 align-items-center justify-content-between'>
              <span className='d-block px-1'>
                <span className='d-block h6 mb-2 text-light'>Check and certify my ad by Finder experts</span>
                <span className='d-block mb-2 mb-sm-0 opacity-70'>Ads with Certified badge get <strong>10x</strong> more views</span>
              </span>
              <span className='d-block h4 mb-0 text-light'>$35</span>
            </FormCheck.Label>
          </FormCheck>
        </Card>
        <Card className='card-light card-hover card-body px-4 mb-2'>
          <FormCheck id='ad-option-2' className='form-check-light'>
            <FormCheck.Input type='checkbox' />
            <FormCheck.Label className='d-sm-flex w-100 align-items-center justify-content-between'>
              <span className='d-block px-1'>
                <span className='d-block h6 mb-2 text-light'>10 lifts to the top of the list (daily, 7 days)</span>
                <span className='d-block mb-2 mb-sm-0 opacity-70'>Your ad will be seen by as many people as possible</span>
              </span>
              <span className='d-block h4 mb-0 text-light'>$20</span>
            </FormCheck.Label>
          </FormCheck>
        </Card>
        <Card className='card-light card-hover card-body px-4 mb-2'>
          <FormCheck id='ad-option-3' className='form-check-light'>
            <FormCheck.Input type='checkbox' />
            <FormCheck.Label className='d-sm-flex w-100 align-items-center justify-content-between'>
              <span className='d-block px-1'>
                <span className='d-block h6 mb-2 text-light'>Featured ad for 7 days</span>
                <span className='d-block mb-2 mb-sm-0 opacity-70'>Ads with Featured badge get <strong>5x</strong> more views</span>
              </span>
              <span className='d-block h4 mb-0 text-light'>$15</span>
            </FormCheck.Label>
          </FormCheck>
        </Card>
        <div className='text-end pt-4 pb-2'>
          <div className='h4 mb-4 text-light'>Total: $35</div>
          <Button size='lg' variant='outline-light me-2'>Do not promote</Button>
          <Button size='lg' variant='primary btn-lg'>Submit</Button>
        </div>
      </Container>
    </CarFinderPageLayout>
  )
}

export default PromotionPage
