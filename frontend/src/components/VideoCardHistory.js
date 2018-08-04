import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { observer } from "mobx-react";

function VideoCardHistory(props){
  return (
    <Collapse in={props.expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph variant="body2">
          Event History
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Severity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.history.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.time.toString()}</TableCell>
                <TableCell>{item.severity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Collapse>
  )
}

export default observer(VideoCardHistory);