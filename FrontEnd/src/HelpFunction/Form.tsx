/*פונקציה לטופס +טופס*/
export function Form() {
    function mySearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("hello");
        let formData = new FormData(e.target as HTMLFormElement);
        console.log(formData.get("regionid"));
        console.log(formData.get("JobType"));

    }
    return (
        <div className='searchall'>
            <form onSubmit={(e) => { mySearch(e) }} className='formsearch'>
                <legend>Find The Best Babysitter:-</legend>
                <div id="all">
                    <div className='Regionidall'>
                        <label >REGIONID:</label>
                        <select name="regionid" id="regionid">
                            <option value="none">All Region</option>
                            <option value="west">West</option>
                            <option value="midwest">Midwest</option>
                            <option value="south">South</option>
                            <option value="north">North</option>
                        </select>
                    </div>
                    <div className='Cityall'>
                        <label >City:</label>
                        <select name="city" id="city">
                            <option value="none">All City</option>
                        </select>
                    </div>
                    <div className='jobtypeall'>
                        <label >Part Time:</label>
                        <select name="JobType" id="JobType">
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                            <option value="LiveIn">Live In</option>
                            <option value="OvernightCare">Overnight Care</option>
                        </select>
                    </div>
                    <div className='buttomsearch'>
                        <label>:</label>
                        <input type="submit" value="s" className="buttonsearch" />


                    </div>
                </div>
            </form>
        </div>
    )
}