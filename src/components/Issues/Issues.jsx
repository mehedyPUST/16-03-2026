import React, { use } from 'react';
import Issue from '../Issue/Issue';


const Issues = ({ issuesPromise }) => {
    const issuesData = use(issuesPromise);
    const issues = issuesData.data;
    console.log(issues)


    return (
        <div className='grid grid-cols-4 gap-3 mt-4'>


            {
                issues.map((issue, index) => <Issue key={index} issue={issue}></Issue>)
            }
        </div>
    );
};

export default Issues;