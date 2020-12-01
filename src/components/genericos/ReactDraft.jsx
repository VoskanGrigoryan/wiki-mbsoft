import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Paper } from "@material-ui/core";

export default class ReactDraft extends Component {
   state = {
      editorState: EditorState.createEmpty(),
   };

   onEditorStateChange = (editorState) => {
      this.setState({
         editorState,
      });
   };

   render() {
      const { editorState } = this.state;

      // console.log(editorState.getCurrentContent());
      // console.log(convertToRaw(editorState.getCurrentContent()));
      const hugo = draftToHtml(convertToRaw(editorState.getCurrentContent()));

      console.log(hugo);
      // const [thread, setThread] = useState({});

      // const guardarThread = () => {
      //    setThread(hey);
      // };

      return (
         <Paper elevation={3} className="mt-3">
            <Editor
               editorState={editorState}
               toolbarClassName="toolbarClassName"
               wrapperClassName="wrapperClassName"
               editorClassName="editorClassName"
               onEditorStateChange={this.onEditorStateChange}
            />
            {/* <textarea
               disabled
               value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            ></textarea> */}
         </Paper>
      );
   }
}
