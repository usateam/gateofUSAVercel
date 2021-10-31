import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { selectService } from '../slice/selectors';
// import {  } from './slice/types';
import { useServiceSlice } from '../slice';

const Index = ({ service, details }) => {
  const [active, setActive] = useState('');
  const { actions } = useServiceSlice();
  // const menuId = useSelector(selectService);
  const dispatch = useDispatch();

  // console.log('service detay iç ', service);
  // console.log('service detay iç-detay ', details);

  const handleMenuID = () => {
    // console.log('service Id ', service.id);
    setActive(service.id);
    dispatch(actions.changeMenuId(service.id));
  };

  return (
    <>
      {/* first-thumb */}
      {service.fields.IsVisible && (
        <div className={active ? 'active' : ''} onClick={handleMenuID}>
          <div className="thumb">
            <span className="icon">
              <img src={service.fields.IconImage[0].url} alt="" />
            </span>
            {service.fields.icontitle}
          </div>
        </div>
      )}
      {/* <div className="last-thumb">
        <div className="thumb">
          <span className="icon">
            <img src="assets/images/service-icon-01.png" alt="" />
          </span>
          Traveling
        </div>
      </div> */}
    </>

    // <div className="col-lg-12">
    //   <div className="naccs">
    //     <div className="grid">
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <div className="menu">
    //             <div className="first-thumb active">
    //               <div className="thumb">
    //                 <span className="icon">
    //                   <img src="assets/images/service-icon-01.png" alt="" />
    //                   <img src={service.fields.IconImage[0].url} alt="" />
    //                 </span>
    //                 {service.fields.icontitle}
    //               </div>
    //             </div>
    //             <div className="last-thumb">
    //               <div className="thumb">
    //                 <span className="icon">
    //                   <img src="assets/images/service-icon-01.png" alt="" />
    //                 </span>
    //                 Traveling
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-lg-12">
    //           <ul className="nacc">
    //             <li className="active">
    //               <div>
    //                 <div className="thumb">
    //                   <div className="row">

    //                     <div className="col-lg-6 align-self-center">
    //                       <div className="left-text">
    //                         <h4>SEO Analysis &amp; Daily Reports</h4>
    //                         <p>
    //                           Lorem ipsum dolor sit amet, consectetur adipiscing
    //                           elit, sedr do eiusmod deis tempor incididunt ut
    //                           labore et dolore kengan darwin doerski token.
    //                           dover lipsum lorem and the others.
    //                         </p>
    //                         <div className="ticks-list">
    //                           <span>
    //                             <i className="fa fa-check"></i> Optimized
    //                             Template
    //                           </span>{' '}
    //                           <span>
    //                             <i className="fa fa-check"></i> Data Info
    //                           </span>{' '}
    //                           <span>
    //                             <i className="fa fa-check"></i> SEO Analysis
    //                           </span>
    //                           <span>
    //                             <i className="fa fa-check"></i> Data Info
    //                           </span>{' '}
    //                           <span>
    //                             <i className="fa fa-check"></i> SEO Analysis
    //                           </span>{' '}
    //                           <span>
    //                             <i className="fa fa-check"></i> Optimized
    //                             Template
    //                           </span>
    //                         </div>
    //                         <p>
    //                           Lorem ipsum dolor sit amet, consectetur adipiscing
    //                           elit, sedr do eiusmod deis tempor incididunt.
    //                         </p>
    //                       </div>
    //                     </div>
    //                     <div className="col-lg-6 align-self-center">
    //                       <div className="right-image">
    //                         <img
    //                           src="assets/images/services-image.jpg"
    //                           alt=""
    //                         />
    //                       </div>
    //                     </div>

    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Index;
