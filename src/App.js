import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  const plan=[
    {
      title:"FREE",
      rupees:"$0",
      tenure:"/month",
      features:[
        {
          advance:"Single User",isApplicable:true},
        {
          advance:"5GB Storage",isApplicable:true},
          {
            advance:"Unlimited Public Projects",isApplicable:true
          },
          {
           advance:"Community Access",isApplicable:true
          },
          {
            advance:"Unlimited Private Projects"
          },
          {
             advance:"Dedicated Phone Support"
          },
          {
            advance:"Free Subdomain"
          },{
            advance:"Monthly Status Reports"
          }
      ]
    },
    {
      title:"PLUS",
      rupees:"$9",
      tenure:"/month",
      features:[
        {
          advance:"5 Users",isApplicable:true},
        {
          advance:"50GB Storage",isApplicable:true},
          {
            advance:"Unlimited Public Projects",isApplicable:true
          },
          {
           advance:"Community Access",isApplicable:true
          },
          {
            advance:"Unlimited Private Projects",isApplicable:true
          },
          {
             advance:"Dedicated Phone Support",isApplicable:true
          },
          {
            advance:"Free Subdomain",isApplicable:true
          },{
            advance:"Monthly Status Reports"
          }
      ]

    },
    {
    title:"PRO",
      rupees:"$49",
      tenure:"/month",
      features:[
        {
          advance:"Unlimited User",isApplicable:true},
        {
          advance:"150 GB Storage",isApplicable:true},
          {
            advance:"Unlimited Public Projects",isApplicable:true
          },
          {
           advance:"Community Access",isApplicable:true
          },
          {
            advance:"Unlimited Private Projects",isApplicable:true
          },
          {
             advance:"Dedicated Phone Support",isApplicable:true
          },
          {
            advance:"Unlimited Free Subdomain",isApplicable:true
          },{
            advance:"Monthly Status Reports",isApplicable:true
          }
      ]
    }
  ]
         
  
  return (
    <div className="App">
      {
      plan.map((planning,index)=>(
        <Package
        key={index}
        title={planning.title}
        rupees={planning.rupees}
        tenure={planning.tenure}
        features={planning.features} 
        />
      ))
      }
    </div>
  );
}

function Package({title,rupees,tenure,features})
{
  return(
    <div className='background'>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                <h6 className="card-price text-center">{rupees}<span className="period">{tenure}</span></h6>
                </div>
                <hr/>
                <ul className="fa-ul">
                  {
                    features.map((feature, index) => (
                      <li key={index}>{feature.isApplicable ? <FontAwesomeIcon icon={icon({name: 'check'})}/> : <FontAwesomeIcon icon={icon({name: 'xmark'})}/>  }  {feature.advance}</li>

                    ))
                  }
                </ul>
                <div className="card-body">
                <a href="#" className="btn btn-primary " > BUTTON</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default App;