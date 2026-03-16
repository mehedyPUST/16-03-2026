import React, { use } from 'react';
import Issue from '../Issue/Issue';


const Issues = ({ issuesPromise }) => {
    const issuesData = use(issuesPromise);
    const issues = issuesData.data;
    console.log(issues.length)


    return (
        <div className='w-11/12 mx-auto'>
            <h1>Total : {issues.length} Issues</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>


                {
                    issues.map((issue, index) => <Issue key={index} issue={issue}></Issue>)
                }
            </div>
        </div>
    );
};

export default Issues;


// import React, { use } from 'react';
// import Issue from '../Issue/Issue';

// const Issues = ({ issuesPromise, filter }) => {
//     const issuesData = use(issuesPromise);
//     const issues = issuesData.data;

//     // Filter issues based on status
//     const filteredIssues = issues.filter(issue => {
//         if (filter === 'all') return true;
//         return issue.status === filter;
//     });

//     return (
//         <div className='w-11/12 mx-auto'>
//             {/* Showing count after filter */}
//             <div className='flex justify-between items-center mt-4'>
//                 <p className='text-gray-600'>
//                     Showing {filteredIssues.length} {filter === 'all' ? 'total' : filter} issues
//                 </p>
//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
//                 {filteredIssues.map((issue) => (
//                     <Issue key={issue._id} issue={issue} />
//                 ))}
//             </div>

//             {/* If no issues found */}
//             {filteredIssues.length === 0 && (
//                 <div className='text-center py-10 text-gray-500'>
//                     No {filter} issues found
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Issues;