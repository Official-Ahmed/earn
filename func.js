function jailbreaking(){
    if(document.cookie.indexOf('kex=0') >= 0)
        document.location.href = '.';
    else
        document.cookie = 'kex=0';
    </script>
    <script>function print(){}</script>
    <script src="common/exploit.js"></script>
    <script src="common/helpers.js"></script>
    <script src="common/malloc.js"></script>
    <script src="common/rop.js"></script>
    <script src="common/syscalls.js"></script>
    <script src="common/syscalls2.js"></script>
    <script src="jb/c-code.js"></script>
    <script>
    if(main_ret == 179 /* already hacked */ || main_ret == 0 /* success */)
    {
        alert("You're all set!");
        read_ptr_at(0);
    }
    else
        alert("Jailbreak failed! Reboot your PS4 and try again.");
}
