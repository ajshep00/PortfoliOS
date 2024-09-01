  
  const ResumeApp: React.FC = () => {

    const pdfUrl = './files/pdf/resume/honors-noFC_engineeringresumes.pdf';

    return (
            <div className='relative h-[500px] max-h-2xl rounded-lg overflow-hidden'>
                <iframe src={pdfUrl} className="relative w-full h-full"></iframe>
            </div>
  );
};

export default ResumeApp;