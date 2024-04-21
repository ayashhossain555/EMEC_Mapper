import React from 'react';

const Contact = () => {
    return (
        <div>
            <div id='contact' className="my-52 w-full">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-around">
                    <iframe height={"400vh"} width={"40%"} src="https://maps.google.com/maps?q=4%2F1%20Block%20A%20Lalmatia%2C%20Apt%201B&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="4/1 Block A Lalmatia, Apt 1B" aria-label="4/1 Block A Lalmatia, Apt 1B"></iframe>
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-4xl font-bold text-accent uppercase">Contact Us</h1>
                        <h4 className="text-2xl font-semibold my-10">For any inquiries please email</h4>
                        <h4 className="font-semibold btn btn-accent"><a href="mailto:skhan971@gmail.com">skhan971@gmail.com</a></h4>
                        <h4 className="text-lg font-semibold">4/1 Block A Lalmatia, Apt 1B<br />Tel: 01706499827</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;