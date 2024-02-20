import React from 'react';

const Viewdona = () => {

    const data = [
        {
            donation: 20,
            gotdonated: 30,
            donarinfo: 'seshu',
        }
            

        
        // {
        //     donation:20,
        //     gotdonated:30,
        //     donarinfo:'raghu',

        // },
        // {
        //     donation:20,
        //     gotdonated:30,
        //     donarinfo:'ranga',

        // }

    ]
    const item=data[0];
    return (
        <>
            {/* {data.map(item=>(<li key={item.donarinfo}>
            <div style={{textAlign:'center'}}>
            <p>no of donation:{item.donation}</p>
            <p>no of residents got donated:{item.gotdonated}</p>
            <p>donators information:{item.donarinfo}</p>
        </div>
        </li>))} */}
        <div style={{textAlign:'center'}}>
            <p>no of donation:{item.donation}</p>
            <p>no of residents got donated:{item.gotdonated}</p>
            <p>donators information:{item.donarinfo}</p>
        </div>
            


        </>
    );
};

export default Viewdona;