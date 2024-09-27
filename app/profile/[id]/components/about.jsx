"use client";

export default function About ({ data }) {

    return (
  
        <div className="w-full space-y-5">

            <div className="panel p-0 overflow-hidden">

                <div className="head">
                    <p>About Me</p>
                </div>

                <div className="quill-content !py-3" dangerouslySetInnerHTML={{ __html: data.description }}></div>

            </div>

        </div>

    )

}
