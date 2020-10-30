function startJailbreak(){
    if(document.cookie.indexOf('kex=0') >= 0)
        document.location.href = '.';
    else
        document.cookie = 'kex=0';

    function print(){}
    src="common/exploit.js"
    src="common/helpers.js"
    src="common/malloc.js"
    src="common/rop.js"
    src="common/syscalls.js"
    src="common/syscalls2.js"
    src="jb/c-code.js"
    
    if(main_ret == 179 /* already hacked */ || main_ret == 0 /* success */)
    {
        alert("You're all set!");
        read_ptr_at(0);
    }
    else
        alert("Jailbreak failed! Reboot your PS4 and try again.");
}
