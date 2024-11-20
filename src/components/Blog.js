import React from "react";
import CreateIcon from '@mui/icons-material/Create'
import TocIcon from '@mui/icons-material/Toc'
import TextField from '@mui/material/TextField'
import "./blog.css"
const Blog = () => {
  return (
    <div className="test">
      <div className="right-sidebar">
        <div className="blogs">
          <h3>The OverFlow Blog</h3>
          <p>
            <CreateIcon style={{ color: 'grey', marginRight: 10 }} />
            The umexpected benefits of mentoring others
          </p>
          <p>
            <CreateIcon style={{ color: 'grey', marginRight: 10 }} />
            Podcast 354 Building for AR with Niantic Labs' augmented reality SDK
          </p>
        </div>
        <div className="blogs">
          <h3>Featured & meta</h3>
          <p>
            <TocIcon style={{ color: 'grey', marginRight: 10 }} />
            Beta release of Collectives™ on Stack OverFlow
          </p>
        </div>
        <div className="blogs-3">
          <h3>Hot meta post</h3>
          <p>
            <span>8 &nbsp;</span>Tags[driver] and [device-driver] appear to be
            redundant
          </p>
          <p>
            <span>27 &nbsp;</span>How to handle dupes where Ais closed as dupe
            of B but i have an answer that ..
          </p>
          <p>
            <span>27 &nbsp;</span>Ambigous tag [containers]
          </p>
        </div>
        <div>
          <h2>Content Filters</h2>
          <TextField id="outlined-basic" label="add custom filters" variant="outlined" />
        </div>
      </div>
    </div>
  )
}
export default Blog