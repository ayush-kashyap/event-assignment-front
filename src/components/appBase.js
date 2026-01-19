import { Layout, Row ,Col,Card, Button, Flex, message, Spin } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux"
import { setEvents } from "../redux/slices/ticketSlice.js"
import axios from "axios"
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"

export const AppBase=()=>{
    const events= useSelector((state)=>state.event.events);
    const [dataLoading,setDataLoading]=useState(true);
    const dispatch=useDispatch();
    useEffect(()=>{
        getEvents();
    },[]);

    const getEvents=()=>{
        setDataLoading(true);
        axios.get("http://event-assignment-backend.vercel.app/api/event/events").then((res)=>{
            dispatch(setEvents(res.data));
            setDataLoading(false);
        }).catch((err)=>{
            message.error(err.response.data);
            setDataLoading(false);
        });
    }
    const bookTicket=(id)=>{
        setDataLoading(true);
        axios.post(`http://event-assignment-backend.vercel.app/api/ticket/book/${id}`).then((res)=>{
            message.success(res.data);
            getEvents();
            setDataLoading(false);
        }).catch((err)=>{
            message.error(err.response.data);
            setDataLoading(false);
        });
    }
return(

    <Layout>
        <Header style={
            {
                backgroundColor:"white"
            }
        }>

            <span style={{
                fontWeight:"bold",
                fontSize:"1.5rem"
            }}>Events</span>
        </Header>
        
        <Content  style={{
            backgroundColor:"whitesmoke",
            height:"90vh"
        }}>
            <Spin spinning={dataLoading} style={{
                height:"90vh"
            }}>
            <Row gutter={[10,10]} style={{
                margin:"1rem 1rem"
            }}>
                    {events &&  events.map((event)=>
                    
                    <Col sm={22} md={8}> 
                        <Card title={event?.title || "--"}>
                        <div><span style={{fontWeight:"bold"}}>Total Seats : </span>{event?.totalSeats || "0"}</div>
                        <div><span style={{fontWeight:"bold"}}>Available Seats :</span> {event?.seatsAvailable || "0"}</div>
                            <Flex justify="space-between">
                            <em>{event?.date || "--"}</em>
                            <Button  disabled={event?.seatsAvailable==0} type="primary" onClick={
                                ()=>{
                                    bookTicket(event?._id)
                                }
                            }> Book </Button>
                            </Flex>
                        </Card>
                        </Col>)
                        
                    }
                   
            </Row>
            </Spin>
            
        </Content>
    </Layout>
)
}