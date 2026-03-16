import React from 'react';
import OpenStatus from '../../assets/Open-Status.png';
import ClosedStatus from '../../assets/Closed-Status .png';

const Issue = ({ issue }) => {
    return (
        <div className={`p-3 shadow-md space-y-2 rounded-md ${issue.status === 'open' ? 'border-t-4 border-t-green-500' : issue.status === 'closed' ? 'border-t-4 border-t-purple-500' : 'hdsjhjd'}`}>
            <div className='flex justify-between'>

                <span>
                    <img
                        src={issue.status === 'open' ? OpenStatus : ClosedStatus}
                        alt={`${issue.status} status`}
                        className="w-6 h-6"
                    />
                </span>


                <span className={`${issue.priority === 'high' ? 'badge badge-soft badge-error' :
                    issue.priority === 'low' ? 'badge badge-soft badge-primary' :
                        issue.priority === 'medium' ? 'badge badge-soft badge-warning' :
                            'badge badge-soft'
                    }`}>{issue.priority.toUpperCase()}</span>
            </div>

            <h2 className='text-xl font-bold line-clamp-1'>{issue.title}</h2>
            <p className="line-clamp-2 text-justify">{issue.description}</p>

            <div className='flex gap-3'>
                <span className={`${issue.labels[0] === 'bug' ? 'badge badge-soft badge-error' :
                    issue.labels[0] === 'enhancement' ? 'badge badge-soft badge-success' :
                        issue.labels[0] === 'documentation' ? 'badge badge-soft badge-info' : 'badge-soft'
                    }`}>
                    {issue.labels[0] === 'bug' ? <i className="fa-solid fa-bug"></i> :
                        issue.labels[0] === 'enhancement' ? <i className="fa-solid fa-wand-magic-sparkles"></i> :
                            issue.labels[0] === 'documentation' ? <i className="fa-solid fa-file-lines"></i> :
                                <i className="fa-solid fa-file-line"></i>
                    }{issue.labels[0].toUpperCase()}</span>



                {
                    issue.labels?.[1] && (
                        <span className={`${issue.labels[1] === 'good first issue' ? 'badge badge-soft badge-accent' :
                            issue.labels[1] === 'enhancement' ? 'badge badge-soft badge-success' :
                                issue.labels[1] === 'documentation' ? 'badge badge-soft badge-info' :
                                    issue.labels[1] === 'help wanted' ? 'badge badge-soft badge-warning' : 'badge-soft'
                            }`}>
                            {issue.labels[1] === 'good first issue' ? <i className="fa-solid fa-star"></i> :
                                issue.labels[1] === 'enhancement' ? <i className="fa-solid fa-wand-magic-sparkles"></i> :
                                    issue.labels[1] === 'help wanted' ? <i className="fa-solid fa-life-ring"></i> :
                                        <i className="fa-solid fa-tag"></i>
                            }{issue.labels?.[1]?.toUpperCase() || ''}</span>
                    )
                }



            </div>

        </div >
    );
};

export default Issue;



// import React from 'react';
// import OpenStatus from '../../assets/Open-Status.png';
// import ClosedStatus from '../../assets/Closed-Status .png';

// const Issue = ({ issue }) => {
//     return (
//         <div className={`p-3 shadow-md space-y-2 rounded-md ${issue.status === 'open'
//                 ? 'border-t-4 border-t-green-500'
//                 : issue.status === 'closed'
//                     ? 'border-t-4 border-t-purple-500'
//                     : ''
//             }`}>

//             <div className='flex justify-between'>
//                 <span>
//                     <img
//                         src={issue.status === 'open' ? OpenStatus : ClosedStatus}
//                         alt={`${issue.status} status`}
//                         className="w-6 h-6"
//                     />
//                 </span>

//                 <span className={`${issue.priority === 'high' ? 'badge badge-soft badge-error' :
//                         issue.priority === 'low' ? 'badge badge-soft badge-primary' :
//                             issue.priority === 'medium' ? 'badge badge-soft badge-warning' :
//                                 'badge badge-soft'
//                     }`}>
//                     {issue.priority?.toUpperCase()}
//                 </span>
//             </div>

//             <h2 className='text-xl font-bold line-clamp-1'>{issue.title}</h2>
//             <p className="line-clamp-2 text-justify">{issue.description}</p>

//             <div className='flex gap-2 flex-wrap'>
//                 {/* Labels */}
//                 {issue.labels?.map((label, index) => (
//                     <span key={index} className={`${label === 'bug' ? 'badge badge-soft badge-error' :
//                             label === 'enhancement' ? 'badge badge-soft badge-success' :
//                                 label === 'documentation' ? 'badge badge-soft badge-info' :
//                                     label === 'good first issue' ? 'badge badge-soft badge-accent' :
//                                         label === 'help wanted' ? 'badge badge-soft badge-warning' :
//                                             'badge badge-soft'
//                         }`}>
//                         {label === 'bug' && <i className="fa-solid fa-bug mr-1"></i>}
//                         {label === 'enhancement' && <i className="fa-solid fa-wand-magic-sparkles mr-1"></i>}
//                         {label === 'documentation' && <i className="fa-solid fa-file-lines mr-1"></i>}
//                         {label === 'good first issue' && <i className="fa-solid fa-star mr-1"></i>}
//                         {label === 'help wanted' && <i className="fa-solid fa-life-ring mr-1"></i>}
//                         {!['bug', 'enhancement', 'documentation', 'good first issue', 'help wanted'].includes(label) &&
//                             <i className="fa-solid fa-tag mr-1"></i>
//                         }
//                         {label.toUpperCase()}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Issue;