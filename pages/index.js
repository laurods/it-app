import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'file-size';

import api from '../services/api';
import GlobalStyle from '../styles/global'
import { Container, Content } from './styles';
import Upload from '../components/Upload';
import FileList from '../components/FileList';
import FileInput from './FileInput';
class Home extends Component{
    state = {
        uploadedFiles: [],

    };
    /*
    async componentDidMount(){
    
        const response = await api.get('post');

        this.setState({
            updateFiles: response.data.map(file => ({
                id: file._id,
                name: file.name,
                preview: file.url,
                uploaded:true,
                url: file.url,
            }))
        })
    }
    */
    handleUpload = files => {
      const uploadedFiles = files.map(file => ({
        file,
        id: uniqueId(),
        name: file.name,
        preview:URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: null,        
      }))
     
      this.setState({            
        uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    //uploadedFiles.forEach(this.processUpload); Função para armazenar no banco de dados
    };

    updateFile = (id, data) => {
        this.setState({ uploadedFiles: this.state.updateFiles.map(updateFile => 
            {
            return id === uploadedFile.id 
            ? {... uploadedFile, ...data} 
            : uploadedFile;
        })
    });

    };

    processUpload = (uploadedFile) => {
        const data = new FormData();
        data.append('file', uploadedFile.file, uploadedFile.name)
        api.post('post', data, {
            onDownloadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                this.uploadedFile(this.updateFile.id, {
                    progress,
                });
            }
        }).then(response => {
            this.uploadedFile(uploadedFile.id, {
                uploaded: true,
                id: response.data._id,
                url: response.data.url,
            })
        }).catch(() => {
            this.uploadedFile(uploadedFile.id, {
                error: true,              
            })
        })
    }

    componentWillUnmount(){
        this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }

    handleDelete = async id => {
        await api.delete(`post/${id}`);
        this.setState({
            updateFiles: this.state.uploadedFiles.filter(file => file.id !== id),
        })
    }
    render(){
        const { uploadedFiles } = this.state;
       
        return(
            <Container>
                <Content>
                    <Upload  onUpload={this.handleUpload}/>
                    { !!uploadedFiles.length && (
                        <FileList  files={uploadedFiles} onDelete={this.handleDelete}/>
                        //<FileInput  files={uploadedFiles} />
                    )}                             
                </Content>
                <GlobalStyle />
            </Container>
            );

    }
  
}

export default Home
