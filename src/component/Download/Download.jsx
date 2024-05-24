import { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';






const Download = () => {
    const ref = useRef();

    return (
        <div>
            <div>
                <div ref={ref}>
                    <h1>My PDF Content</h1>
                    <p>This content will be converted to PDF.</p>
                </div>
                <ReactToPdf targetRef={ref} filename="mypdf.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate PDF</button>
                    )}
                </ReactToPdf>
            </div>

        </div>
    );
};

export default Download;