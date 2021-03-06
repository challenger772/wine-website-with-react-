import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {makeStyles} from '@material-ui/core/styles'
import {Input} from 'reactstrap'

import options from 'routes/components/CommonPagination'
import data from './demoData'
import iconEdit from 'images/commonIcons/edit.svg'
import iconCopy from 'images/commonIcons/copy.svg'
import iconExpire from 'images/commonIcons/expire.svg'
import iconDelete from 'images/commonIcons/delete.svg'

const useStyles = makeStyles({
  editIcon: {
    height: 13,
    width: 13,
    marginLeft: 5,
  },
  bkgrdImgSize: {
    width: 35,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const PriceRuleTable = () => {
  const classes = useStyles()

  const sortCaret = (order) => {
    if (!order) return <span>&nbsp;&nbsp;</span>
    else if (order === 'asc') return <i className="fa fa-long-arrow-up ml-2" />
    else if (order === 'desc') return <i className="fa fa-long-arrow-down ml-2" />
    return null
  }

  const IconButton = ({icon, label, className}) => (
    <div className={`${className} mt-2 d-flex flex-row`}>
      <div className={classes.bkgrdImgSize}>
        <img src={icon} className={classes.editIcon} />
      </div>
      <div className="w-100 ml-2">{label}</div>
    </div>
  )

  const actionFormater = () => (
    <>
      <IconButton icon={iconEdit} label="Edit" />
      <IconButton icon={iconCopy} label="Copy" />
      <IconButton icon={iconDelete} label="Delete" />
      <IconButton icon={iconExpire} label="Expire" />
    </>
  )

  const checBoxFormatter = () => <Input type="checkbox" className="ml-0 mt-0 position-relative" />

  const columns = [
    {
      dataField: 'time_date',
      text: 'Time / Date Range',
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: 'default',
      text: 'Default',
      formatter: checBoxFormatter,
    },
    {
      dataField: 'universal',
      text: 'Universal',
      formatter: checBoxFormatter,
    },
    {
      dataField: 'name',
      text: 'Name',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'description',
      text: 'Description',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'price_adjustment',
      text: 'Price Adjustment',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'price_classifications',
      text: 'Price Classifications',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'countries',
      text: 'Countries',
      sortCaret: sortCaret,
      sort: true,
    },
    {
      dataField: 'quantity_range',
      text: 'Quantity Range',
      sortCaret: sortCaret,
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  return (
    <BootstrapTable
      keyField="id"
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      columns={columns}
      noDataIndication={'no results found'}
      pagination={paginationFactory(options)}
    />
  )
}

export default PriceRuleTable
