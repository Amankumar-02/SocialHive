import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import FooterBar from "./FooterBar";

function Search() {
  // declare images
  const postImg = [
    {dp:"https://images.unsplash.com/photo-1607829866698-a186b93fdd0f?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1484588168347-9d835bb09939?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"mia_jones",
    caption:"Smiling because I can.",
    song:"bryanlowwww",
    id:"1",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1614102073832-030967418971?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"nathan_black",
    caption:"Living my best life, unapologetically",
    song:"bryanlowwww",
    id:"2",
    isFollowing: false,
    isLike: false,
    value:{
      one: `2k`,
      two: `7,520`,
      three: `231`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"sophie_parker",
    caption:`"Creating my own happiness."`,
    song:"bryanlowwww",
    id:"3",
    isFollowing: false,
    isLike: false,
    value:{
      one: `4k`,
      two: `2,520`,
      three: `31`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://plus.unsplash.com/premium_photo-1673329271082-365e038a1efd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"liam_hughes",
    caption:"Rise above the storm, find the sunshine.",
    song:"bryanlowwww",
    id:"4",
    isFollowing: false,
    isLike: false,
    value:{
      one: `1.2k`,
      two: `620`,
      three: `41`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"emma_nguyen",
    caption:"Kindness is free, sprinkle that stuff everywhere.",
    song:"bryanlowwww",
    id:"5",
    isFollowing: false,
    isLike: false,
    value:{
      one: `7.8k`,
      two: `250`,
      three: `131`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1605007493699-af65834f8a00?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1517598024396-46c53fb391a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"lucas_ramirez",
    caption:"Blessed and grateful.",
    song:"bryanlowwww",
    id:"6",
    isFollowing: false,
    isLike: false,
    value:{
      one: `2k`,
      two: `820`,
      three: `233`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1608976409757-8aa9957f98ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"olivia_adams",
    caption:"Living life, one adventure at a time.",
    song:"bryanlowwww",
    id:"7",
    isFollowing: false,
    isLike: false,
    value:{
      one: `523`,
      two: `210`,
      three: `61`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1482424917728-d82d29662023?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"ethan_anderson",
    caption:"Find joy in the ordinary.",
    song:"bryanlowwww",
    id:"8",
    isFollowing: false,
    isLike: false,
    value:{
      one: `5.2k`,
      two: `8,920`,
      three: `991`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1612712191426-54db4d88cbec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"ava_wong",
    caption:"She believed she could, so she did.",
    song:"bryanlowwww",
    id:"9",
    isFollowing: false,
    isLike: false,
    value:{
      one: `7.2k`,
      two: `620`,
      three: `431`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1578769201933-db435912bf88?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1634130259367-456626db4296?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"william_martin",
    caption:"Making memories everywhere I go.",
    song:"bryanlowwww",
    id:"10",
    isFollowing: false,
    isLike: false,
    value:{
      one: `4.2k`,
      two: `920`,
      three: `93`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1579294800821-694d95e86143?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"chloe_hernandez",
    caption:"Life is short, make it sweet.",
    song:"bryanlowwww",
    id:"11",
    isFollowing: false,
    isLike: false,
    value:{
      one: `26k`,
      two: `107`,
      three: `601`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1613424969431-62a604d2cf67?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
    nameText:"noah_scott",
    caption:"Fearlessly authentic.",
    song:"bryanlowwww",
    id:"12",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1431032843361-ec2cd229c751?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1595326947594-d0074652a181?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"amelia_garcia",
    caption:"Dream big, sparkle more.",
    song:"bryanlowwww",
    id:"13",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1508742345712-0656a285ac27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"jacob_thomas",
    caption:"Collecting moments, not things.",
    song:"bryanlowwww",
    id:"14",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"mia_lewis",
    caption:"Slaying the day, one step at a time.",
    song:"bryanlowwww",
    id:"15",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"isabella_wilson",
    caption:"Life's a journey, not a destination.",
    song:"bryanlowwww",
    id:"16",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1578769182642-d422764abeed?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"james_rodriguez",
    caption:`"Lost in wanderlust."`,
    song:"bryanlowwww",
    id:"17",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1584362528653-d1486eb91d2b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"emily_li",
    caption:"Simplicity is the ultimate sophistication.",
    song:"bryanlowwww",
    id:"18",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1691699206485-7c621c930ab1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"benjamin_ng",
    caption:"Creating my own sunshine.",
    song:"bryanlowwww",
    id:"19",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1628499636754-3162d34ca39c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"lily_brown",
    caption:"Sunshine mixed with a little hurricane.",
    song:"bryanlowwww",
    id:"20",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1570840934347-4dc56c98b8ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"daniel_gonzalez",
    caption:"Inhale confidence, exhale doubt",
    song:"bryanlowwww",
    id:"21",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1520512202623-51c5c53957df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"sophia_campbell",
    caption:"Living for the moments.",
    song:"bryanlowwww",
    id:"22",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    {dp:"https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    profileDp:"https://images.unsplash.com/photo-1593215261340-ca189da98636?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameText:"jack_lee",
    caption:"Chasing dreams, catching flights.",
    song:"bryanlowwww",
    id:"23",
    isFollowing: false,
    isLike: false,
    value:{
      one: `42k`,
      two: `1,520`,
      three: `631`,
    },
    StyleFormat:{
      transform: `translate(-50%, -50%) scale(0)`,
    },},
    // {dp:"https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    // profileDp:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // nameText:"grace_murphy",
    // caption:"Embrace the chaos.",
    // song:"bryanlowwww",
    // id:"24",
    // isFollowing: false,
    // isLike: false,
    // value:{
    //   one: `42k`,
    //   two: `1,520`,
    //   three: `631`,
    // },
    //   StyleFormat:{
    //     transform: `translate(-50%, -50%) scale(0)`,
    //   },},
  ];

  //declare variables
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  //declare auth methods
  useEffect(() => {
    try {
      const getData = authService.account.get();
      getData.then(function (res) {
        setUserDetails(res);
      });
    } catch (error) {
      console.log(`Get Data error: `, error);
    }
  }, []);

  const logoutUser = async (e) => {
    // e.preventDefault();
    try {
      await authService.logout();
      navigate("/");
      console.log(`Logout SuccessFully`);
      toast.success("Successfully Logout!");
    } catch (error) {
      console.error("Log-out failed:", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
          {/* <div className="min-h-min max-w-7xl mx-auto flex justify-between text-left px-3 rounded-md">
            <div>
              <Link to="/profile">
                <img
                  src="./src/asset/logo2.png"
                  alt="Insta Icon"
                  className="w-20"
                />
              </Link>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div> */}
          <div className="container">
            <div id="card">
              
              <div id="searchBar" className="bg-gray-300">
                <i className="ri-search-line"></i>
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Search"
                />
              </div>
              <div id="searchContainer">
                {postImg.map((src, index) => (
                  <div key={index}>
                  <Link to={`/search/previews/${index}`}>
                  <div className="searchTab cursor-pointer" key={index}>
                    <img
                      src={src.dp}
                      alt={index}
                      />
                  </div>
                  </Link>
                      </div>
                ))}
              </div>
              <FooterBar />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <p className="mt-4">
            Please Login To see Profile{" "}
            <Link to="/">
              <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
                Login
              </span>
            </Link>
          </p> */}
        </>
      )}
    </>
  );
}

export default Search