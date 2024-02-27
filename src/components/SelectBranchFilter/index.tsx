import { type ChangeEvent } from 'react'

import { useListVocancies } from '../../contexts/companyContext'
import { Sectores } from '../ArrayOfSectors'
import { Select } from './style'

export const SelectBranchFilter = () => {
  const { setCompanyBranchFilter, companyBranchFilter } = useListVocancies()
  const handlefilteredVancancy = (event: ChangeEvent<HTMLSelectElement>) => {
    setCompanyBranchFilter(event.target.value)
  }

  return (
    <Select value={companyBranchFilter} onChange={handlefilteredVancancy}>
      <option value="">Filtro</option>
      {Sectores.map((option) => {
        return (
          <option value={option.name} key={option.id}>
            {option.name}
          </option>
        )
      })}
    </Select>
  )
}
