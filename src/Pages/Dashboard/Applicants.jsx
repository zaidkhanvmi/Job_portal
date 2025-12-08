import React, { useContext } from 'react'
import ApplicantsTable from '../../Components/Tables/ApplicantsTable'
import { JobContext } from '../../Context'

const Applicants = () => {

  const { applicantList } = useContext(JobContext);

  return (
    <div>
      <ApplicantsTable data={applicantList} />
    </div>
  )
}

export default Applicants