import {  getAuth,
    createUserWithEmailAndPassword, onAuthStateChanged, signOut,
    signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set,   ref, onValue, push,remove } from "firebase/database";
import app from "./firebaseconfig";


const auth = getAuth(app);
const db = getDatabase(app);

let createNewUserWithAuth = (nodeName,obj)=>{
        return new Promise((resolve, reject) => {
          createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
              console.log(res);
              obj.id = res.user.uid;
              const reference = ref(db, `${nodeName}/${obj.id}`);
              set(reference, obj)
                .then((res) => {
                  resolve("Data Send Successfully in Database and User Created");
                })
                .catch((err) => {
                  reject(err.message);
                });
            })
            .catch((err) => {
              reject(err.message);
            });
        });
}

let checkIfUserisalreadyLogin = () =>{

}
let postFBData = (nodeName, obj,data) => {
    return new Promise((resolve, reject) => {
      //  if(data && data.id){
      //   let postRef =ref(db,`${nodeName}/${data.id}`);
      //   set(postRef, obj)
      //   .then(()=> {
      //       resolve("Data send successfully");
      //   })
      //   .catch((err)=> {
      //       reject(err.message,"===>");
      //   })
      //  }else{
        let keyRef = ref(db, `${nodeName}/`);
        obj.id = push(keyRef).key;
        let postRef =ref(db,`${nodeName}/${obj.id}`);
        set(postRef, obj)
        .then(()=> {
            resolve("Data send successfully");
        })
        .catch((err)=> {
            reject(err.message);
        })
      //  }
    });
};
let getData =(nodeName) =>{
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}`);
    onValue(reference, (data) => {
      if (data.exists()) {
        resolve(data.val());
      } else {
        reject("Data Not Found :(");
      }
    });
  })
}
let deleteData = (nodeName, id) => {
  return new Promise((resolve, reject) => {
      const DeleteById = ref(db, `${nodeName}/${id}`);
      console.log(DeleteById)
      remove(DeleteById).then(() => {
          resolve("Data Deleted Successfully...");
      }).catch((err) => {
          reject(err.message);
      })
  });
}

let fbCustomPost = (nodeName, obj) =>{
  return new Promise((resolve, reject) => {
    console.log("nodename===> ",nodeName,"obj===> ",obj);
    const reference = ref(db, `${nodeName}/`);
    set(reference, obj) 
    .then(() => {
          resolve("course saved successfully")
        })
        .catch((err) => {
          console.log(err);
          reject("course close")
        })
  //   set(reference, obj)
  //   onValue
  //   .then((res) => {
  //     // console.log(res);
  //     resolve("course open")
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     reject("course close")
  //   })
  })
}

// let updateFBData = (nodeName, id, obj) =>{
//   return new Promise((resolve, reject) => {
//     const reference = ref(db, `${nodeName}/${id}`);
//     set(reference, obj)
//     .then((res) => {
//       resolve("Data has been Updated....")
//     })
//     .catch((err) => {
//       reject("Data Not Updated..")
//     })
//   })
// }
let signUpUser = (obj) => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          obj.id = res.user.uid;
          const reference = ref(db, `users/${obj.id}`);
          set(reference, obj)
            .then(() => {
              resolve("Data Send Successfully in Database and User Created");
            })
            .catch((err) => {
              reject(err.message);
            });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };

  let loginUser = (nodeName,obj) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          console.log(res.user.uid);
          const reference = ref(db, `${nodeName}/${res.user.uid}`);
          onValue(reference, (data) => {
            if (data.exists()) {
              resolve(data.val());
            } else {
              reject("Data Not Found :(");
            }
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };

  let signOutUser = () => {
    signOut(auth)
        .then(function () {
            console.log("Logout Successfully");
            window.location.href = "/";

        })
        .catch(function (err) {
            console.log(err);
        });
}


  let CheckUser = () => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
  
        } else {
          reject('User not Signed in')
        }
      });
  
    });
  };

  export {
    postFBData, 
    getData,
    CheckUser,
    signOutUser,
    // FBgetDataByID,
    signUpUser,
    loginUser,
    deleteData,
    createNewUserWithAuth,
    fbCustomPost,
  }