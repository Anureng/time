"use client"
import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Calendar } from "../../components/ui/calendar"
import { useCallback, useState } from "react"
import { CalendarCheck, Clock5, Earth, MoveLeft, User, Video } from "lucide-react"
import { Label } from "../../components/ui/label"
const OpenData = () => {
    const [date, setDate] = useState<Date | undefined>()
    const [time, setTime] = useState<string>()
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [submit, setSubmit] = useState<boolean>(false)
    console.log(date);

    const addInput = (value: string) => {
        setTime(value)
    }

    const handleButtonClick = useCallback(() => {
        setTime("");
    }, []);

    const Time = ["6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30",]

    return (
        <div className="flex justify-center items-center h-screen">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Click to add Date</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px]  ">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-between flex-col md:flex-row  ">
                        {
                            submit ? (
                                <>

                                </>
                            ) : (
                                <>
                                    <div className={`md:border-r-2 hidden md:block  border-black  ${date ? "w-96" : "w-3/5"}  `}>
                                        <div className=" p-2">
                                            {
                                                time && <MoveLeft onClick={handleButtonClick} className=" border  rounded-full  text-blue-600 cursor-pointer" />
                                            }

                                            <div className="flex items-center justify-center">
                                                <img src="./main.jpg" className="h-1=28 w-28" alt="" />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex  md:p-16  md:space-y-24  justify-between  flex-col">
                                            <div className="md:space-y-4">
                                                <p className="text-3xl">Fibery Demo</p>
                                                <p className="flex items-center space-x-2"><Clock5 size={16} /> 45 min</p>
                                                {
                                                    time && (
                                                        <>

                                                            <p className="flex items-center"><CalendarCheck size={42} />{String(date)}</p>
                                                        </>
                                                    )
                                                }
                                                <p>Book a meeting with our Fibery team . Talk to real person about how get your process set up with us or not</p>
                                            </div>
                                            <div>
                                                <p>Cookie Setting</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        <div className="flex items-center justify-center">
                            {
                                submit ? (
                                    <>
                                        <div className="w-[300px] md:w-[800px]  ">
                                            <div className="flex items-center justify-center flex-col md:space-y-3 space-y-1">
                                                <img className="w-12 h-12 rounded-full  " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                                                <p>You are Scheduled</p>
                                                <p>A calendar inivation has been sent to your email address</p>
                                                <div className="border p-2 border-black rounded-xl space-y-3">
                                                    <div className=" flex items-center justify-center w-full">
                                                    </div>

                                                    <div className="md:space-y-2">
                                                        <p className="font-bold text-lg">Fibery Demo</p>
                                                        <div className="flex items-center">
                                                            <CalendarCheck />        {String(date)}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <User />  {String(name)}
                                                    </div>

                                                    <div className="flex items-center">
                                                        <Earth /> UK , Ireland, Libson Time
                                                    </div>

                                                    <div className="flex items-center">
                                                        <Video /> Web conferecing details to flow
                                                    </div>


                                                </div>
                                                <hr />
                                                <p className="font-bold">Schedule your own meeting with Calendly for free</p>
                                                <p>Eliminate the back-and-forth emails for finding time.</p>

                                                <div className="md:space-x-3">
                                                    <button className="border border-black px-2 py-1 rounded-xl">Sign Up with Google</button>
                                                    <button className="border border-black px-2 py-1 rounded-xl">Sign Up with Microsoft</button>
                                                </div>

                                                <p className="text-blue-400">Sign up with work email</p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>

                                    </>
                                )
                            }

                            {
                                submit ? "" : (
                                    <>

                                        <div>
                                            {
                                                time ? (
                                                    <div className=" w-96 flex flex-col space-y-4   ">
                                                        <p>Enter Details</p>

                                                        <div className="flex flex-col space-y-1.5">
                                                            <Label htmlFor="name">Name</Label>
                                                            <Input type="text" placeholder="Enter Your name" value={name} onChange={(e) => setName(e.target.value)} />
                                                        </div>

                                                        <div className="flex flex-col space-y-1.5">
                                                            <Label htmlFor="label">Email</Label>
                                                            <Input id="name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                                                        </div>


                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Game
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                food
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Design
                                                            </label>
                                                        </div>


                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                sales
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                marketing
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                human resources
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Education
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Leadership
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                consulting
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Something Else
                                                            </label>
                                                        </div>




                                                        <Button type="submit" onClick={() => setSubmit(true)}>Save changes</Button>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center space-x-9">
                                                        <div className="flex flex-col md:space-y-32">
                                                            <Calendar
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={setDate}
                                                                className="rounded-md border"
                                                            />
                                                            <div>
                                                                <p>Time Zone</p>
                                                                <p>UK , Ireland , Libson Time</p>
                                                            </div>
                                                        </div>
                                                        <div className="p-2 space-y-7  flex flex-col ">
                                                            {date &&
                                                                (
                                                                    Time.map((el: string) => (
                                                                        <Button className="w-fit" onClick={() => addInput(el)}>
                                                                            {el}
                                                                        </Button>
                                                                    ))
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </>
                                )
                            }

                        </div>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default OpenData
